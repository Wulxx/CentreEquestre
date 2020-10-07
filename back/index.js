import express from 'express';
import bodyParser from 'body-parser';

const app = express()
const port = 4042;


app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.send('Test')

})

app.listen(port, () => {
  console.log(`Nous écoutons sur le port http://localhost:${port}`)
})