import express from 'express';

const app = express();

app.get('/navers', (request, response) => {
  console.log('hello')
})

app.listen(3333, () => { console.log('Server Runnning')})