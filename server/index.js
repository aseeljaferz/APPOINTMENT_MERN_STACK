const express = require('express');
const mongoose = require('mongoose');
const app = express();
const AppointmentModel = require("./models/Appointment");
const cors = require('cors');

app.use(express.json());
app.use(cors());


mongoose.connect(
    "mongodb+srv://aseel:aseel@appointment.ph7ivuz.mongodb.net/appointment",
    {
        useNewUrlParser: true,
    }
);

app.post("/insert", async (req, res) => {

    const patientName = req.body.patientName;
    const patientAge = req.body.patientAge;
    const patientEmail = req.body.patientEmail;
    const patientPno = req.body.patientPno;
    const patientAddress = req.body.patientAddress;
    const patientState = req.body.patientState;
    const patientCity = req.body.patientCity;
    const patientPincode = req.body.patientPincode;
    const patientDate = req.body.patientDate;
    const patientProblem = req.body.patientProblem;
    
    const appointment = new AppointmentModel({patientName:patientName,
                                              patientAge: patientAge  ,
                                              patientEmail:patientEmail,
                                              patientPno: patientPno, 
                                              patientAddress: patientAddress, 
                                              patientState: patientState,
                                              patientCity: patientCity, 
                                              patientPincode: patientPincode,
                                              patientDate: patientDate,
                                              patientProblem:patientProblem,
                                            //   patientTimetocall:"Morning",
                                            //   patientCheckuptype:"A Routine Checkup",
                                            //   patientProblem:"Cold and Cough"
                                            });

    try
    {
        await appointment.save();
        res.send("Inserted data");
    }
    catch(err)
    {
        console.log(err);
    }

});

app.get("/read", async (req, res) => {
    AppointmentModel.find({ }, (err, result) => {
        if (err)
        {
            res.send(err);
        }

        res.send(result);

   });

});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await AppointmentModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

app.listen(3003, () => {
    console.log("Server is created on port 3003...");
});