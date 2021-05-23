const express = require('express');
const router = express.Router();
const clientdetails = require('../models/clientDetails');

router.get('/getimage', function(req, res) {
    clientdetails.find({})
        .exec(function(err, imagename) {
            console.log(imagename, "from clientdetails.find");
            if (err) {
                res.json({
                    success: false,
                    err: err,
                    failuremessage: 'Unable to found image'
                })
            } else {
                res.json({
                    success: true,
                    code: 200,
                    imagename: imagename
                })
            }
        })
})

// router.delete('/deleteProduct/:id', (req, res, next) => {
//     let id = req.params.id;
//     console.log(id)
//     User.findByIdAndRemove(id).then(product => {
//         res.json(product, {
//             msg: "product deleted successfully"
//         })
//     }).catch(err => {
//         console.log(err)
//     })
// })

module.exports = router;