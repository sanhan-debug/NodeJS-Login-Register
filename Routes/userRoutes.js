import { Router } from "express";
import { createUser, loginUser } from "../Services/usersService.js";

export const userRoute = new Router()

userRoute.post('/login',loginUser)

userRoute.post("/register",createUser);