import mongoose from "mongoose";
import express from "express"
import { users } from "../Modelss/Registration.model.js";
import { registerUser } from "../Controllers/UserController.js";
import { loginUser } from "../Controllers/UserController.js";
import { sendQueryData } from "../Controllers/UserController.js";
const router = express.Router();
router.post("/register", registerUser);
router.get("/getownerdetail")
router.post("/login", loginUser)
router.post("/querydata", sendQueryData);
export default router
