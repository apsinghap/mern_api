const express = require("express");
//const app = express();
const mongoose = require("mongoose");
const User = require('../models/userModel');

const router =express.Router();
//post
router.post("/",async(req,res)=>{
    const {name,email,age} = req.body;
try{
    const userData = await User.create({
        name:name,
        email: email,
        age: age,

    });
    res.status(201).json(userData);

}catch (error){
    console.log(error);
    res.send(400).json({error:error.messgae})
}
});

//get
router.get("/", async (req, res) => {
try{
    const showAll = await User.find();
    res.status(200).json(showAll);
}catch (error){
    console.log(error);
    res.send(500).json({error:error.messgae})

}
  res.send("api running");
});

//get single user 
router.get("/:id", async (req, res) => {
    const {id} =req.params;
    try{
        const showAll = await User.findById({_id: id});
        res.status(200).json(showAll);
    }catch (error){
        console.log(error);
        res.send(500).json({error:error.messgae})
    
    }
      res.send("api running");
    });

//DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await userData.findByIdAndDelete({ _id: id });
      res.status(201).json(deletedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

//UPDATE
router.patch("/edit/:id", async (req, res) => {
    const { id } = req.params;
    console.log("get body", req.body);
    console.log("get id", id);
    //const { name, email, age } = req.body;
    try {
      const updatedUser = await userData.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  
module.exports =router;
