require('dotenv').config();
const { Sequelize } = require('sequelize');
const { NODE_ENV, PORT, DB_CONN } = process.env;
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./utils/limiter');
const routers = require('./routes');
const handleError = require('./errors/handleError');

const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(limiter);
app.use(requestLogger);
app.use(cors());
app.use(routers);
app.use(errorLogger);
app.use(errors());
app.use(handleError);
const port = PORT || 4000;
const sequelize = new Sequelize(DB_CONN)
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => {
  console.log(`BACKEND RUNNING on port ${port}`)
  console.log(`DB_CONN ${DB_CONN}`)
  console.log(`NODE_ENV ${NODE_ENV}`)
  }
);
