import { decodeToken } from "../utils/jsonwebtoken.js";

const authMiddleware = async (req,res,next) => {
  const authorization = req.headers.authorization ?? req.headers.Authorization;
  if(!authorization || (authorization && !authorization.startsWith('Bearer '))) return res.status(400).json({message:'Token must be provided'})
  console.log(authorization);
  const token = authorization.split(' ')[1]
  try{
    const decodedToken = decodeToken(token);
    req.userID = decodedToken.userID;
  } catch(err) {
    return res.status(401).json({message:err.message})
  }


  next();
}
export default authMiddleware;