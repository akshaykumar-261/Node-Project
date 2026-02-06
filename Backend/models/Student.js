import mongoose  from "mongoose";

const StudentSchema = mongoose.Schema({
name:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
phnumber:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
university:{
    type:String,
    required:true
},
stream:{
    type:String,
    required:true
},
fees:{
    type:Number,
    required:true
},
password:{
    type:String,
    required:true
}
},{timestamps:true})
const StudentModel = mongoose.model("students" ,StudentSchema);
export default StudentModel;