const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    department:{
        type: String,
        required:true,   
    },
    salary: {
       type: Number,
       required:true,

    },
    employeeType: {
       type: String,
       required:true,
       enum:["full-time","part-time"]
    },
    organization: {
       type: [String],
       required:true,       
    }
})

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;