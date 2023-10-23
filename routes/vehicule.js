const express = require ('express');
const router = express.Router();
const vehicule = require ('../models/vehicule.js');

router.get('/getall', (req,res)=>{
    vehicule.find()
    .then(
        (vehicule)=>{
            res.send(vehicule);
        }
    )
    .catch(
        (err)=> {
            res.send(err)
        }
    )
})

//get by id 
router.get('/getbyid/:id' , (req, res)=>{
  
    let myid = req.params.id;

    vehicule.findOne({ _id: myid })
                .then(
                    (art)=>{
                        res.send(art);
                    }
                )
                .catch(
                    (err)=>{
                        res.send(err)
                    }
                )

})


router.get( '/all' , (req, res)=>{
     
    vehicule.find()
        .then(
            (vehicules)=>{
                res.send(vehicules);
            }
        )
        .catch(
            (error)=>{
                res.send(error);
            }
        )

} )
module.exports= router ;