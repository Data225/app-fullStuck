const mongoose = require('mongoose')


const connectDB = async ()=>{
    try{
        mongoose.set("strictQuery", false);
       await  mongoose.connect(process.env.MONGOOSE_URI)
       console.log('MongoDB connecte')
    }catch(error){
        console.log('erreur  : ', error);
        process.exit();
    }
}


module.exports = connectDB