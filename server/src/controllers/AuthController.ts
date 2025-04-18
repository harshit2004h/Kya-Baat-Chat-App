import { Request, Response } from "express";
import prisma from "../config/db.config.js";
import jwt from "jsonwebtoken";

interface loginPayloadType {
  name: string;
  email: string;
  provider: string;
  oauth_id: string;
  image?: string;
}
  
class AuthController {
  static async login(request: Request, response: Response) {
    try {
      const body: loginPayloadType = request.body;
      let findUser = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });

      if (!findUser) {
        findUser = await prisma.user.create({
          data: body,
        });
      }

      let JWTpayload = {
        id: findUser.id,
        name: findUser.name,
        email: findUser.email,
      };

      const token = jwt.sign(JWTpayload, process.env.JWT_SECRET as string, {
        expiresIn: "90d",
      });

      return response.json({
        message: "Login Success",
        user: {
          ...findUser,
          token: `Bearer ${token}`,
        },
      }); 
    } catch (error) {
      return response.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}

export default AuthController;
