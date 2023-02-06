import mongoose from "mongoose"
const connect = async (database_uri) => await mongoose.connect(database_uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  });
export default connect