const express = require("express");
const contactModel = require("../models/contacts");
const Contact = require("../models/contacts");

const route = express.Router();
//get all
route.get("/", async (req, res) => {
    try
    {
        const allContacts = await contactModel.find({});
        res.status(200).json({status: "SUCCESS", allContacts});
    }
    catch(err)
    {
        res.json(err);
    }
});
//get one 
route.get("/:id", async (req, res) =>{

    const id = req.params.id;
    try
    {
        const singleContact = await contactModel.findById(id);
        res.status(200).json({status: "SUCCESS", singleContact});
    }
    catch(err)
    {
        res.json(err);
    }
});
//create
route.post("/create", async (req, res) =>{
    try{
        const newContact = await contactModel.create(req.body);
        res.status(200).json({status: "SUCCESS",newContact})
    } catch(err){
        res.json(err);
    }

});

//update
route.put("/update/:id", async (req, res)=> 
{
    const id = req.params.id;
    try{
        const updateContact = await contactModel.findByIdAndUpdate(id, req.body);
        res.status(200).json({status: "SUCCESS",updateContact})
    }
    catch(err)
    {
        res.json(err);
    }
})
//delete
route.delete("/delete/:id", async (req, res) => 
{
    const id = req.params.id;
    try{
        const deleteContact = await contactModel.findByIdAndDelete(id);
        res.status(200).json({status:"SUCCESS", deleteContact});
    }
    catch(err){
        res.status(404).json({status: "Failed", err});
    }
})
module.exports = route;