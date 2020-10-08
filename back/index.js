import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/user.js'

const app = express()
const port = 4042;



app.use(bodyParser.json());
app.use('/user', usersRoutes)

app.get('/', (req,res) => {
  res.send('Test')

})

app.listen(port, () => {
  console.log(`Nous écoutons sur le port http://localhost:${port}`)
})