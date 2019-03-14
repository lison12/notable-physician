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
})


app.get('/physician/:DocId', function (req, res) {
  // console.log(req.params)
  const { DocId } = req.params;
  const filteredAppts = sampleData.appointments.filter(appointment => {
    return appointment.physicianId === Number(DocId);
  });
  res.send(filteredAppts);
  // db.insert(req.body.item, req.body.quantity, (error, results) => {
  // 	if (error) {
	//   	res.status(500).send(error);	
	//   } else {	
	//   	res.status(201).send();
	// 	}
  // })
})

 
app.listen(3000, () => {console.log('Express server listening on port', 3000)});

