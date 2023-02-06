import User from '../models/UsersModel.js'

export const createUser = async (req,res) => {
  const { body } = req
  const newUser = new User(body);
  await newUser.save();
  return res.json({user: newUser})
}

