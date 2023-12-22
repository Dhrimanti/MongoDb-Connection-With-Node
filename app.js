
const connectDB=require('./db/connect')
const express=require('express');
const app=express();
const port=3000;
const tasks=require('./routes/tasks')
app.use(express.json())
require('dotenv').config()

app.get('/hello',(req,res)=>{
  res.send("Task Manager")
})

const start=async ()=>{
  try {
    await connectDB(process.env.url)
    app.listen(port,console.log('Bhai sun raha hu'))
  } catch (error) {
    console.log(error)
    
  }
}
start()

app.use('/api/v1/tasks',tasks)