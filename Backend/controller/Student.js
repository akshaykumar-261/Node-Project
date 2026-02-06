import StudentModel from "../models/Student.js";

export const CreateStudent = async(req,res)=>{
 try
 {
   const stuData = await StudentModel.create({
    name: req.body.name,
    address: req.body.address,
    phnumber: req.body.phnumber,
    email: req.body.email,
    university: req.body.university,
    stream : req.body.stream,
    fees: req.body.fees
  })
  if(stuData) res.status(201).send({message:"Student created" + stuData})
    else res.status(400).send({message:"Student is not created"});
 }  
 catch(error)
 {
    console.log("Failed To Create Student");
 } 
}

export const UpdateStudent = async(req,res)=>{
    try
    {
     const stuData = await StudentModel.findByIdAndUpdate(
    {_id:req.body._id},
    {
    name: req.body.name,
    address: req.body.address,
    phnumber: req.body.phnumber,
    email: req.body.email,
    university: req.body.university,
    stream : req.body.stream,
    fees: req.body.fees
    }
)
 if(stuData) res.status(200).send({message:"Data Updatet Succsessfuly"})
 else res.status(400).send({message:"Data is not Update"});
    }
    catch(error)
    {
     console.log("Failed To Update Student");
    }
}

export const  DeleteStudent = async(req,res)=>{
    try
    {
      const stuData = await StudentModel.deleteOne({_id:req.body._id});
      if(stuData) res.status(200).send({message:"Data Deleted Succsessfuly"})
        else res.status(400).send({message:"Data is not Updatet"})
    }
    catch(error)
    {
        console.log("Failed To Delete Student")
    }
}
export const GetStudent = async(req,res)=>{
    try
    {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 3;
        const skip = (page-1)*limit;
        const totalStudent = await StudentModel.countDocuments();
        const students = await StudentModel.find()
        .skip(skip)
        .limit(limit)
        .sort({createdAt : -1})
         const totalPages = Math.ceil(totalStudent / limit);
        res.status(200).send({page,limit,totalStudent,totalPages,students});
    //  const stuData = await StudentModel.find();
    //  res.status(200).send({stuData});
    }
    catch(error)
    {
        console.log("Failed To Get Student");
    }
}
export const GetStudentById = async(req,res)=>{
    try
    {
     const stuData = await StudentModel.findById(req.params.id);
     if(!stuData) res.status(400).send({message:"Student Not Found"})
        res.send({stuData});
    }
    catch(error)
    {
        res.status(500).send({message:"Internal Server Error" ,error:error.message})
    }
}