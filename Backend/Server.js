import dotenv from "dotenv"
import cors from "cors"

import express from "express"
import userRoute from "./routess/UsersRoute.js"
import roomRoute from "./routess/roomsRoute.js"
import OwnerRoute from "./routess/ownerRoutes.js"
import { ConnectDB } from "./DB/db.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())
app.use('/api/Rooms', roomRoute);
app.use('/api/users', userRoute);
app.use('/api/owner', OwnerRoute);


app.get('/', (req, res)=>{
    res.send("Hello ")
})
ConnectDB();
console.log("Database connected Successfully")

const port = process.env.PORT || '5000';
app.listen(port, ()=>console.log(`server Hi running on port ${port}`));
