const Billable = require('../models/billableEmployees');
const clients = require('../models/clientDetails');

exports.getBillableEmployeesDetailsCount = (req, res, next) => {   
    Billable.aggregate([{
        $group:{
            _id:{stack:"$stack"},
            count:{$sum:1}
        }
    },
    {$match:{count:{"$gte":1}}}
    ]).then(billableEmployeesDetailsCount=>{
        // var result=[];
        // for(var i in billableEmployeesDetailsCount)
        //  result.push([i,billableEmployeesDetailsCount[i]]);
        //  console.log(result);
         res.json(billableEmployeesDetailsCount);

}).catch(err=>{
        console.log(err);
    })
}

exports.getBillableToClientsCount = (req,res,next) =>{
   
        Billable.aggregate([{
            $group:{
                _id:{clientId:"$clientId"},
                count:{$sum:1}
            }
        },
        {$match:{count:{"$gte":1}}}
        ]).then(billableEmployeesCount=>{
             res.json(billableEmployeesCount);
      
        }).catch(err=>{
            console.log(err);
    })
   
   
}


exports.getBillableExperienceCount=(req,res,next)=>{
    Billable.aggregate([{
        $group:{
            _id:{yearOfExperience:"$yearOfExperience"},
            count:{$sum:1}
        }
    },
    {$match:{count:{"$gte":1}}}
    ]).then(billableEmployeesExpDetailsCount=>{
         res.json(billableEmployeesExpDetailsCount);
    }).catch(err=>{
        console.log(err);
    })
}