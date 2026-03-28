
import {NextFunction, Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
            if (err) {
                return res.status(500).json({ message: "Unauthorized" });
            }
            req.user = user as AuthUser | undefined;
            next();
        });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};