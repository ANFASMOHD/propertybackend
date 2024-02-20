const registers=require('../Model/userSchema')


// logic register

exports.register =async(req,res)=>{

    //logic
    console.log('inside usercontrollar register logic');

     const {propertyname,propertylocation,propertynumber,propertytype,facilities,propertyType,propertyyear,propertyincludes,propertyimages}=req.body
      
       // unique value we are checking the already present the database
    try
    { 
        const existingnumber = await registers.findOne({propertynumber})
     if(existingnumber){
        res.status(406).json('Number is Already Exist.. check the Number')
     }
     else{
        const newnumber = new registers({
            propertyname,
            propertylocation,
            propertynumber,
             propertytype,
             facilities, 
            propertyType,
            propertyyear,
            propertyincludes,
           /*  propertImage */
             


        }) 

        // add above object use save()in mongoose
       await newnumber.save()

       res.status(200).json(newnumber)
        
     }
    }catch(err){
        res.status(401).json('Register Request FAILED due to ',err)
    }

    // response
    
}
// javascript runtime errors handle cheyynth == try catch block