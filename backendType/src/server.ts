import express from 'express';
import './database/connection';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => console.log("Server Running"));