const connectionString='mongodb+srv://Dhrimanti:Dhrimanti@cluster0.i2klojd.mongodb.net/'
const mongoose=require('mongoose')

const connectDB=(connectionString)=>{
  mongoose.connect(connectionString)

}
module.exports=connectDB
