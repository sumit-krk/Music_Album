const express = require("express")

const router = express.Router()

const Artists = require("../models/artistmodel")

router.post("", async(req,res)=>{
    const artist = await Artists.create(req.body).populate("name")

    return res.status(201).send({artist})
})


router.get("", async(req,res)=>{
    const artist = await Artists.find().populate("name")

    return res.status(200).json({data:{artist}})
})

module.exports = router