const express = require ("express")
const router = express.Router()


const UserProfile = require ("../models/userProfile")


router.get("/" , async(req,res) => {
    const users = await UserProfile.find()
return res.send(users)

})

router.post("/users/Signup", async(req,res) => {
    const user= new  UserProfile(req.body)
    const newUser = await user.save()
    return res.send(newUser)
})

module.export = router 