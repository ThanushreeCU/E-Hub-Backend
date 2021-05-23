const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

let billableEmployeesSchema = new Schema({
   
    employeeId:{
        type:String
    },
    clientName:{
        type:String
    },
    employeeName:{
        type:String
    },
    dateOfDeployment: {
        type: String
    },
    contractEndDate: {
        type: String
    },
    rateCard: {
        type: Number
    },
    stack: {
        type: String
    },
    yearOfExperience: {
        type: Number
    },
    clientId:{
        type:String
    }
    // clientId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'ClientsDetail'
    // }

});

autoIncrement.initialize(mongoose.connection);

billableEmployeesSchema.plugin(autoIncrement.plugin, 'billableEmployeesSchema');

module.exports = mongoose.model('BillableEmployee', billableEmployeesSchema);