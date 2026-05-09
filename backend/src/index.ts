import express from 'express';
import cors from 'cors';
import eventRouter from './routes/eventRoute.js';
import categoryRouter from './routes/categoryRoute.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend Invofest Running!');
});

app.use('/events', eventRouter);
app.use('/categories', categoryRouter);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

