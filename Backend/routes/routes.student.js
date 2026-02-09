import express from 'express'
import { CreateStudent, DeleteStudent, GetStudent, GetStudentById, loginUser, UpdateStudent } from '../controller/Student.js';
import {createStudentValidation,validate} from "../middleweare/validation.student.js"
import { authmiddlewear } from '../middleweare/authmiddlewera.js';
const router = express.Router();

router.post("/register",createStudentValidation,validate,CreateStudent);
router.put("/",authmiddlewear,UpdateStudent);
router.delete("/",authmiddlewear,DeleteStudent);
router.get("/",authmiddlewear,GetStudent);  //http://localhost:8081/student?page=1&limit=3
router.get("/:id" ,authmiddlewear,GetStudentById);
router.post("/login",loginUser)
export default router;