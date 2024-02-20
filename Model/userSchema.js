// import mongoose

const mongoose= require('mongoose')
//import validatr
const validator=require('validator')

//create Schema to use Schema class in mongoose



const registerSchema= new mongoose.Schema({


   /*  id:{
        type:Number,
        require:true,
        unique:true
    }, */
    propertyname:{
        type:String,
        require:true,
        min:['3','Must be atleast 3 characters got only {value}'  ]
    },
    propertylocation:{
        type:String,
        require:true

    },
    propertynumber:{
        type:Number,
        unique:true,
        require:true
    }, 
     propertytype:{
        type:String,
        enum:['rent','lease'],
        require:true,
        
    },
     facilities:{
        wifi:{type:Boolean,default:false},
        water:{type:Boolean,default:false},
        mainroad:{type:Boolean,default:false}
    }, 
    propertyType:{
        type:String,
        enum:['commercial','residential'],
        require:true
    },
    propertyyear:{
    type:Number,
    require:true
    },
    propertyincludes:{
        type:String,
        enum:['prayerhall','pool'],
        require:true
    
},
/* propertImage:{
    type:String,
    require:true
} */


})




//createModel
   // first databasinte collection nte name then next  schemante name 
const registers =mongoose.model("registers",registerSchema)

//export the model

module.exports= registers