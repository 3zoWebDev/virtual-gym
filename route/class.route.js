// Class Route

//1- register

const router = require("express").Router();
const Class = require("../models/class.model");

router.post("/addClass", async (req, res) => {
    console.log("entering roooute")
    let { class_title,class_type,trainer,duration,startAt,date,description,image } = req.body;

    console.log(req.body)
    try {
      let classObject = new Class({ class_title,class_type,trainer,duration,startAt,date,description,image });
      let classSaved = await classObject.save();
      res.json({ classObject: classSaved }).status(200);
    } catch (error) {
        console.log(error)
       
      res.status(400).json({ message: "unable to register" });
    }
});
// router.get("/class/listClass", async (req, res) => {
//     console.log("inside get ")
//     try {
//         let classList = await classObject.find();
//         res.json({ classList }).status(200);
//       } catch (error) {
//           console.log(error)
//         res.json({ message: "unable to list all classes" }).status(400);
//       }
// })

router.get("/listClass",(req, res)=>{
    Class.find().then(listClass =>{
        res.json({message:"success", listClass }).status(200);
    }).catch(error =>{
        console.log(error)
        res.json({ message: "unable to list all classes" }).status(400);
    })
})

module.exports = router;