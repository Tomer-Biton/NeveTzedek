// initialize the server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const whiskyNameAndID = [
  { id: 1, name: 'Lagavulin' },
  { id: 2, name: 'Ardbeg' },
  { id: 3, name: 'Glenfiddich' },
  { id: 4, name: 'Glenlivet' },
  { id: 5, name: 'Macallan' },
  { id: 6, name: 'Balvenie' },
  { id: 7, name: 'Glenmorangie' },
  { id: 8, name: 'Aberlour' },
  { id: 9, name: 'Highland Park' },
  { id: 10, name: 'Talisker' }
];

app.get('/', (req, res) => {
  res.send(whiskyNameAndID);
});

app.post('/', (req, res) => {
  const newWhisky = req.body;
  whiskyNameAndID.push(newWhisky);
  res.send(whiskyNameAndID);
});

app.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedWhisky = req.body.name;
  whiskyNameAndID[id - 1] = updatedWhisky;
  res.send(whiskyNameAndID);
});

app.delete('/:id', (req, res) => {
  const id = req.params.id;
  whiskyNameAndID.splice(id - 1, 1);
  res.send(whiskyNameAndID);
});

app.listen(process.env.MONGO_URI, () => {
  console.log('Server is running somewhere');
});

// to run node server.js on port 27017, enter in terminal the following command:
// PORT=27017 node server.js

