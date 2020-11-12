import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';
import dbConfig from './database/db.js'

//API express
import authAPI from './routes/auth.routes.js'
import horsesAPI from './routes/horse.routes.js'
import cavalierAPI from './routes/cavalier.routes.js'
// import adminAPI from './routes/admin.routes.js'
// import teacherAPI from './routes/teacher.routes.js'

import  helmet from 'helmet';

const app = express();
const port = 4043;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cors());


//MongoDb COnnexion
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }).then(() => {
    console.log("database connected")
  }, error => {
    console.log("database can't be connected " + error)
  }
)

mongoose.set('useCreateIndex', true);

app.use('/public',express.static('public'));
app.use('/user', authAPI)
// app.use('/admin', adminAPI)
// app.use('/teacher', teacherAPI)
app.use('/horses', horsesAPI)
app.use('/cavalier', cavalierAPI)

// Express error handling
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('Something went wrong'));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.listen(port, () => {
  console.log(`Nous écoutons sur le port http://localhost:${port}`)
})
