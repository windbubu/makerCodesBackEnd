const express= require("express");
const app =express();
const mongoose = require("mongoose")

//  const userRouters = require ("./routes/users")




app.get("/users/SignUp",(req,res) =>{
    res.send("hello world")
})


app.get("/", (req,res) =>{
    res.send([1,2,3])
})


// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//  app.use("./users", userRouters)

mongoose
  .connect("mongodb://localhost:27017/libX-rest", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Error:", err));


const port = process.env.PORT || 3000
app.listen(port, () =>console.log(`listenin on port ${port}`))