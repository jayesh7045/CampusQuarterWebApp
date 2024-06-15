import express from "express"
const router = express.Router();
import cors from "cors"
import Room from "../Modelss/room.js"
const app = express();
app.use(cors());
router.get('/getallrooms', async(req, res)=>{
    try{
        const room = await Room.find({})
        res.send(room)
    }
    catch(error){
        return res.status(400).json({message : error});
    }
})

router.get(`/getroombyid/:roomid`, async(req, res)=>{
    const roomid = req.params.roomid
    console.log(roomid)
    try{
        const room = await Room.findOne({_id : roomid})
        console.log(room)
        res.send(room)
    }
    catch(err){
        return res.status(400).json({message : err});
    }
    

})
export default router


