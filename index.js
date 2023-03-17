const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


mongoose.connect("mongodb://127.0.0.1:27017/JaiMaaMotors", { useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


const bookVehicleScheme = {
  name: String,
  mobileNumber: Number,
  Address: String,
  Vehicle: String
}

const bookVehicle = mongoose.model("bookVehicle", bookVehicleScheme);

app.post("/BookVehicle", function(req,res){
    const name=req.body.name;
    const number=req.body.number;
    const address=req.body.address;
    const vehicle=req.body.vehicle;

    const newBookVehicleData=new bookVehicle({
        name:name,
        mobileNumber:number,
        Address:address,
        Vehicle:vehicle
    });
    newBookVehicleData.save();

    res.redirect("/BookVehicle");
});

const customerSupportSchema={
  name:String,
  mobileNumber:Number,
  area:String,
  complain:String
}
const customerSupport=mongoose.model("customerSupport", customerSupportSchema);

app.post("/CustomerSupport", function(req,res){
    const name=req.body.name;
    const number=req.body.number;
    const area=req.body.area;
    const complain=req.body.subject;
  
    const newCustomerSupport=new customerSupport({
      name:name,
      mobileNumber:number,
      area:area,
      complain:complain
    });
    newCustomerSupport.save();

    res.redirect("/CustomerSupport");
});

const serviceAppointmentSchema={
  name:String,
  mobileNumber:Number,
  Address:String,
  vehicle:String,
  registrationNumber:String,
  date:Date
}
const serviceAppointment=mongoose.model("serviceAppointment", serviceAppointmentSchema);

app.post("/ServiceAppointment", function(req,res){
  const name=req.body.name;
  const number=req.body.number;
  const Address=req.body.address;
  const vehicle=req.body.vehicle;
  const RegistrationNumber=req.body.registrationNumber;
  const date=req.body.date;

  const newServiceAppointment=new serviceAppointment(({
    name:name,
    mobileNumber:number,
    Address:Address,
    vehicle:vehicle,
    registrationNumber:RegistrationNumber,
    date:date
  }));
  newServiceAppointment.save();

  res.redirect("/ServiceAppointment");
})

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/BookVehicle", function (req, res) {
  res.sendFile(__dirname + "/public/BookVehicle.html");
});
app.get("/UserManual", function (req, res) {
  res.sendFile(__dirname + "/public/UserManual.html");
});
app.get("/CustomerSupport", function (req, res) {
  res.sendFile(__dirname + "/public/CustomerSupport.html");
});
app.get("/ServiceAppointment", function(req,res){
  res.sendFile(__dirname+"/public/ServiceAppointment.html");
})
app.listen(3000, function () {
  console.log("listening on port 3000");
});
