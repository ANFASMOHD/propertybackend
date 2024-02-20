/// import mongoose 

const  mongoose =require('mongoose')

// connection string of mongodb


const connectionString = process.env.DATABASE

// connect to mongodb using mongoose

mongoose.connect(connectionString).then(()=>{
    console.log('mongoDb connected Successfully');
}).catch((err)=>{
    console.log(`connection failed due to ${err}`);
})