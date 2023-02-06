import Post from '../models/PostModel.js'
export const createPost = async (req,res) => {
  const { body, userID } = req
  try{
    const newPost = new Post({...body, creator:userID});
    const createdPost = await newPost.save();
    return res.status(201).json({post: createdPost});
  } catch(err) {
    return res.status(400).json({message:err.message})
  }
}