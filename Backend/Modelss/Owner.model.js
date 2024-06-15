import mongoose from "mongoose";
const OwnerSchema = new mongoose.Schema({
  name: {
    type : String,
    required: true,
  },
  contact: {
    type : String,
    required: true,
  },
  email: {
    type : String,
    required: true,
  },
  image: {
    type : String,
    required: true,
  },
}, {timestamps : true});
export const hostelowner = mongoose.model("hostelowner", OwnerSchema);
