import Post from '../models/PostModel.js'
import User from '../models/UsersModel.js'

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

export const getAllPost = async (req,res) => {
  try{
    const allPosts = await Post.find({});
    return res.status(200).json({posts: allPosts});
  } catch(err) {
    return res.status(400).json({message:err.message})
  }
}

// export const getFavoritesPost = async (req,res) => {
//   const { userID } = req
//   try{
//     const favoritePosts = (await User.findById(userID)).favorites;
//     return res.status(200).json({posts: favoritePosts});
//   } catch(err) {
//     return res.status(400).json({message:err.message})
//   }
// }

export const getPostBySlug = async (req,res) => {
  const { slug } = req.params
  try{
    const postFound = await Post.findOne({slug})
    if(!postFound) return res.sendStatus(404);
    return res.json({post:postFound});
  }
  catch(err){
    return res.status(400).json({message:err.message})
  }
}

export const updatePostById = async (req,res) => {
  const { body, userID } = req
  const { id } = req.params
  try{
    const postFound =  await Post.findById(id);
    if(!postFound) return res.sendStatus(404);
    if(postFound.creator.toString() !== userID) return res.sendStatus(403)
    postFound.overwrite({...body, creator: userID});
    const updatedPost = await postFound.save();
    return res.status(200).json({post: updatedPost});
  } catch(err) {
    return res.status(400).json({message:err.message});
  }
}

export const deletePostById = async (req,res) => {
  const { userID } = req
  const { id } = req.params
  try{
    const postFound =  await Post.findById(id);
    if(!postFound) return res.sendStatus(404);
    if(postFound.creator.toString() !== userID) return res.sendStatus(403)
    await postFound.remove();
    return res.sendStatus(204);
  } catch(err) {
    return res.status(400).json({message:err.message});
  }
}

export const upvotePost = async (req,res) => {
  const { userID } = req
  const { id } = req.params
  try{
    const postFound =  await Post.findById(id);
    if(!postFound) return res.sendStatus(404);
    if(!postFound.votes.includes(userID)){
      postFound.votes.push(userID);
    } else{
      postFound.votes = postFound.votes.filter(id=>id.toString()!== userID);
    }
    const updatedPost = await postFound.save();
    return res.json({post: updatedPost});
  } catch(err) {
    return res.status(400).json({message:err.message});
  }
}

