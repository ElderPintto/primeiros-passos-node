const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const data = [
  { id: 1, name: 'Mike', age: 22, company: 'Nascetur Mus Company' },
  { id: 2, name: 'Eleanor', age: 42, company: 'Hendrerit Donec LLP' },
  { id: 3, name: 'Dylan', age: 51, company: 'Nisi Incorporated' },
  { id: 4, name: 'Leila', age: 30, company: 'Eros Non Limited' },
  { id: 5, name: 'Jason', age: 31, company: 'Accumsan Interdum Associates' },
];

const findItem = (arr, id) => {
  return arr.find(item => Number(item.id) === Number(id))
}

app.use(express.json());
app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => {
  return res.json(data);
});

app.get('/:id', (req, res) => {
  const item = findItem(data, req.params.id)
  return res.json(item);
});

app.post('/', (req, res) => {
  const name = req.body.name;
  const site = req.body.site;
  return res.json([site, name]);
});

app.put('/:id', (req,res) => {
  const age = req.body.age
  let item = findItem(data, req.params.id)
  item = {...item, age}
  return res.json(item)
})

app.delete('/:id', (req, res) => {
  let index = findItem(data, req.params.id)
  data.splice(index, 1)
  return res.json(data)
})

app.listen(port, () => console.log(`Listening on port ${port}!`));