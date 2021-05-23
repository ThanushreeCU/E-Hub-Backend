
const Package = require('../models/packageBillable');


exports.postBillablePackage = (req, res, next) => {
    

    new Package({
        clientName:req.body.clientName,
        employeeName:req.body.employeeName,
        dateOfPaymentByTY:req.body.dateOfPaymentByTY,
        dateOfPaymentByClient:req.body.dateOfPaymentByClient,
        rateCardByTY:req.body.rateCardByTY,
        rateCardByClient:req.body.rateCardByClient
     

}).save().then(packages=>{
    res.json(packages);
}).catch(err=>{
    console.log(err);
})

    
}

exports.getBillablePackage = (req, res, next)=>{
   Package.find().then(packages=>{
       res.json(packages);
   }).catch(err=>{
       console.log(err);
   })
}