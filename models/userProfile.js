const mongoose = require ("mongoose")


const profileSchema =new mongoose.Schema({
    name:String,
    Surname:String,
    Age:Number,
    Profession:String,
    About:[{type: mongoose.Schema.Types.ObjectId, ref: "About"}]

})
 
const userProfile= mongoose.model("userProfile",profileSchema)



module.exports = userProfile