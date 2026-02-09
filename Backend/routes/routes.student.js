import express from 'express'
import { CreateStudent, DeleteStudent, GetStudent, GetStudentById, loginUser, UpdateStudent } from '../controller/Student.js';
import {createStudentValidation,validate} from "../middleweare/validation.student.js"
const router = express.Router();

router.post("/register",createStudentValidation,validate,CreateStudent);
router.put("/",UpdateStudent);
router.delete("/",DeleteStudent);
router.get("/",GetStudent);  //http://localhost:8081/student?page=1&limit=3
router.get("/:id",GetStudentById);
router.post("/login",loginUser)
export default router;