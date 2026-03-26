import { Request, Response } from "express";
import { prisma } from "../config/db.config.js";
import jwt from "jsonwebtoken";

interface RequestBody {
    email: string;
    provider: string;
    name: string;
    image: string;
    oauth_id: string;
}

const Login = async (req: Request, res: Response) => {

    console.log(process.env.DIRECT_URL)
    try {
        const data: RequestBody = req.body;
        console.log(data)

        // 🔍 Check if user exists
        let user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        });

        

        

        // 🆕 If user does NOT exist → create
        if (!user) {
            user = await prisma.user.create({
                data:req.body
            });
        }

        // 🔐 Generate JWT
        const token = jwt.sign(
            {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "1h"
            }
        );

        console.log(token)


        // ✅ Response
        return res.status(200).json({
            message: user ? "User logged in successfully" : "User created successfully",
            ...user,
            token:"Bearer "+token
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export {
    Login
}