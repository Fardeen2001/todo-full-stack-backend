import express from "express";
import { loginUser, signupUser } from "../controller/aut-controller.js";
const authRoute = express.Router();
authRoute.post("/signup", signupUser);
authRoute.post("/login", loginUser);
export default authRoute;
