import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
import { CreateStudent, DeleteStudent, GetStudent, GetStudentById, UpdateStudent } from "./controller/Student.js";
import router from "./routes/routes.student.js";
const app = express()   
dotenv.config();
app.use(express.json())
const options = {

    origin: 'http://localhost:3000',

};

app.use(cors(options));
// app.post("/student",CreateStudent)
// app.put("/student", UpdateStudent)
// app.delete("/student",DeleteStudent)
// app.get("/student",GetStudent)  //http://localhost:8081/student?page=1&limit=3
// app.get("/student/:id",GetStudentById)
app.use("/api/student",router)
mongoose
.connect(process.env.DB_URL).then((d)=>{
    console.log("Data Base is connected succfully");
    app.listen(process.env.PORT,()=>{
        console.log("Server is runnning on PORT:" + process.env.PORT)
    });
})
.catch((error)=>{
      console.log("Failed To Coonect DataBase");
})

