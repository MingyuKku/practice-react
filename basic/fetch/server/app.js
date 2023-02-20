const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let id = 2;
const todoList = [
  {
    id: 1,
    text: '할일 1',
    done: false
  }
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/todo', (req, res) => {
  res.json(todoList);
})

app.post('/api/todo', (req, res) => {
  const { text, done } = req.body;
  todoList.push({
    id: id++,
    text,
    done
  })
  return res.send('success');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})