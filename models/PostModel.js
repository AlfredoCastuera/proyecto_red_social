import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  title:  {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true
});


postSchema.methods.toJSON = function() {
  const post = this.toObject();
  delete post.__v;
  return post;
}

const Post = mongoose.model('Post', postSchema)

export default Post