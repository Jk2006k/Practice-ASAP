const mongoose=require('mongoose');
const connecctDB=async()=>{
    try{
        mongoose.connect('mongodb+srv://kishoore004:Siva%405@jk.itech.mongodb.net/practice')
        console.log("successfully connected")
    }catch(error){
        console.log(error.message)
    }
}

module.exports=connecctDB;