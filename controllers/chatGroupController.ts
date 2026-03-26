import { Request, Response } from "express";
import { prisma } from "../config/db.config.js";

export const createChatGroup = async (req: Request, res: Response) => {
    try {
        const body=req.body
        const user=req.user as AuthUser

        console.log(body)

        const response = await prisma.chatGroup.create({
            data:{
                title:body.title,
                passcode:body.passcode,
                userId:user.id
            }
        })

        res.status(200).json({
            message:"Group created successfully",
            response
        })
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})
    }
}


export const getAllChatGroup = async (req: Request, res: Response) => {
    try {
        const user=req.user as AuthUser


        console.log(user)

        const response = await prisma.chatGroup.findMany({
            where:{
                userId:user.id
            },
            orderBy:{
                createdAt:"desc"
            }
        })

        res.status(200).json({
            message:"Group Extracted successfully",
            data:response
        })
    } catch (error) {
        return res.status(500).json({message:"Internal server erro in getting the groups"})
    }
}


export const getOneChatGroup = async (req: Request, res: Response) => {
    try {
        const body=req.body
        const response = await prisma.chatGroup.findUnique({
            where:{
                id:body.id
            }
        })

        res.status(200).json({
            message:"Group Extracted successfully",
            data:response
        })
    } catch (error) {
        return res.status(500).json({message:"Internal server erro in getting the group"})
    }
}

export const deleteOneChatGroup = async (req: Request, res: Response) => {
    try {
        const body=req.body
        const response = await prisma.chatGroup.delete({
            where:{
                id:body.id
            }
        })

        res.status(200).json({
            message:"Group Deleted successfully",
            data:response
        })
    } catch (error) {
        return res.status(500).json({message:"Internal server erro in deleting the group"})
    }
}