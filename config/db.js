const mongoose=require('mongoose');


const connectDataBase=async()=>{
    const connect=await mongoose.connect(process.env.MONGO_URI , {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    });
    console.log("Mongo DB connected");
}

module.exports=connectDataBase;
