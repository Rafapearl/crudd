const express = require("express"); 
const router = express.Router(); 
const gcbController = require("./../controller/gcb.controller"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Adiante ok"});
});

router.get("/listall", gcbController.getAll);

router.get("/listid/:id", gcbController.getSingle);

router.post("/add", gcbController.postCreate);

router.put("/update/:id", gcbController.putUpdate);

router.delete("/delete/:id", gcbController.delDelete);

module.exports = router;