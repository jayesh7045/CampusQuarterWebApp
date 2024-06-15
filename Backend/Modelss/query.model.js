import mongoose from "mongoose";
const querySchema = new mongoose.Schema({
    query : {
        type : String, 
        required : true
    },
    id : {
        type : String,
        required : true
    }
})
export const querymodel = mongoose.model("querymodel", querySchema);