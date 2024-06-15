import express from "express";
const router = express.Router();
import { hostelowner } from "../Modelss/Owner.model.js";
router.get('/ownerdetails/:ownerid', async (req, res)=>{
    const ownerid = req.params.ownerid
    console.log(ownerid);
    try{
        const data = await hostelowner.findById(ownerid);
        res.send({
            status : 200,
            status : "success",
            data : data
        })
    } 
    catch(err)
    {
        res.send({
            status : 404,
            error: err.message
        })
    }  
});
export default router;


