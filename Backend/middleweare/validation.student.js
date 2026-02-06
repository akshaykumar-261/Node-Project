import{body,validationResult} from "express-validator"
export const createStudentValidation = [
    body("name")
    .notEmpty()
    .withMessage("Name Field is required")
    .bail(),

    body("email")
    .notEmpty()
    .withMessage("Email must be required")
    .bail()
    .isEmail()
    .withMessage("Enter Valid Email")
    .bail(),

    body("phnumber")
    .notEmpty()
    .withMessage("PhoneNumber is required")
    .bail()
    .isLength({min:10,max:10})
    .withMessage("Phnumber must be with in 10")
    .bail(),
    body("fees")
    .notEmpty()
    .withMessage("Fess must be required")
    .bail()
    .isNumeric()
    .withMessage("Fess must be a number")
    .bail(),
];

export const validate = (req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).send({
            success:false,
            error:error.array()
        });
    }
    next();
}