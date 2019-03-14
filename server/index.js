const express = require('express');
const bodyParser = require('body-parser');	
const path = require('path'); 
const morgan = require('morgan');
const sampleData = require('../data-sample.js');
// var db = require('../database/index.js');
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev')); 
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/physicians', function (req, res) {
  res.send(sampleData.physicians);
  // if (error) {
  //   res.status(500).send(error);	
  // } else {
  //   res.send(sampleData.physicians);
  // }
})


app.get('/phys/:name', function (req, res) {	
	console.log(req.body)
  db.insert(req.body.item, req.body.quantity, (error, results) => {
  	if (error) {
	  	res.status(500).send(error);	
	  } else {	
	  	res.status(201).send();
		}
  })
})
// app.get('/physicians/appointments', (req, res) => {
//   const { physicianId } = req.query;
//   // would use database query filter
//   const appointments = appointmentsData.filter(appointment => {
//     return appointment.physicianId === parseInt(physicianId);
//   });
//   res.send(appointments);
// })

 
app.listen(3000, () => {console.log('Express server listening on port', 3000)});

