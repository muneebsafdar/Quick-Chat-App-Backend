import {PrismaClient} from "@prisma/client"
import {PrismaPg} from "@prisma/adapter-pg"
import dotenv from "dotenv";
dotenv.config();

console.log("DIRECT_URL at db init:", process.env.DIRECT_URL);
const connectionString = `${process.env.DIRECT_URL!}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };