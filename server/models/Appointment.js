const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true,
    },
    patientAge: {
        type: Number,
        required: true,
    },
    patientEmail: {
        type: String,
        required: true,
    },
    patientPno: {
        type: Number,
        required: true,
    },
    patientAddress: {
        type: String,
        required: true,
    },
    patientState: {
        type: String,
        required: true,
    },
    patientCity: {
        type: String,
        required: true,
    },
    patientPincode: {
        type: Number,
        required: true,
    },
    // patientTimetocall: {
    //     type: String,
    //     required: true,
    // },
    // patientCheckuptype: {
    //     type: String,
    //     required: true,
    // },
    patientProblem: {
        type: String,
        required: true,
    },
    patientDate:{
        type: Date,
        required: true,
    }
});

const AppointmentModel = mongoose.model("appointments", AppointmentSchema);
module.exports = AppointmentModel;  