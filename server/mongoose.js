const mongoose = require("mongoose")
    mongoose.connect("mongodb+srv://mohaimin:mohaimin37@cluster0.xs0xmx7.mongodb.net/").then(()=>{
        console.log("your database base has been connected")
    }).catch((err)=>{
        console.log("error data base has not been connected " + err )
    
    })

   



