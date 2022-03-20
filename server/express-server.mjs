import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
app.use(morgan('dev'));

const db = [];

// routes
app.post('/todo', (req, res) => {
  const todo = {
    id: Date.now(),
    text: req.body.text,
  };

  db.push(todo);

  res.json(todo);
});

app.get('/todo', (req, res) => {
  res.json(db);
});

app.get('/todo/:id', (req, res) => {
  const todo = db.find((t) => t.id === +req.params.id);

  if (todo) {
    res.json({ data: todo });
  } else {
    res.send(404);
  }
});

app.listen(8000, () => {
  console.log('Server running on localhost:8000');
});
