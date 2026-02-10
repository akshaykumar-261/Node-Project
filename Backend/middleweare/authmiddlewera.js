import jwt from "jsonwebtoken"
export const authmiddlewear = async (req, res, next) => {
    try
    {
    const authHeader = req.headers.authorization;
    if (!authHeader)
    {
        return res.status(400).json({message:"Invalid Token"})
    }
    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token,process.env.Jwt_Secret);
        req.user = decode;
        next();
}catch (error)
{
        console.log(error);
    }
}
export default authmiddlewear;