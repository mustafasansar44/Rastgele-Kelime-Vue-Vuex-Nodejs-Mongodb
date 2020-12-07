const express = require('express');
const { model } = require('mongoose');
const router = express.Router()
const Model = require('../Model/PostModel');



// GET REQUEST
router.get('/', async (req, res) => {
    await Model.find({}).then(response => {
        res.send(response)
    })
})

// ADD POST
router.post('/add', async (req, res) => {
    try{
        const words = await new Model(req.body);
        words.save()
        res.sendStatus(200)
    }catch(err){
        console.log("Post işleminde hata var.")
    }
})

// DELETE POST
router.delete('/delete/:id', async (req, res) => {
    try{
        await Model.findOneAndDelete({_id: req.params.id})
        res.sendStatus(200)
    }catch{
        console.log("Böyle biri yok.")
        
    }
})



module.exports = router