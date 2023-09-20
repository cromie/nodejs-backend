const express = require('express');
const routerApi = require('./routes');
// const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.haldler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// const whiteList = ['https://localhost:8080', 'https://myapp.co'];
// const options = {
//   origin: (origin, callback) => {
//     if (whiteList.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('not allowed'));
//     }
//   },
// };
// app.use(cors(options));

app.get('/api', (req, res) => {
  res.send('Hi from my express server');
});

app.get('/api/new-route', (req, res) => {
  res.send(`Hi I'm the new endpoint`);
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Running on my port:' + port);
});
