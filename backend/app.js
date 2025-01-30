const express=require('express')
const app=express()
const PORT=3000;
const connectDB=require('./Config/db')

app.get('/',(req,res)=>{
    res.send('Hello World')
});
app.listen(PORT,async()=>{
    try{
        await connectDB();
        console.log(`Server is running on port ${PORT}`)
    }
    catch(error){
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
});
