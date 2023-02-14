import express  from 'express'
import cors from 'cors'
import helmet from 'helmet'
import xss from 'xss-clean'
const app = express()
const port = 3000

import depsRouter from './routes/departments'
import empsRouter from './routes/employees'
import connectDB from './db/connect'


 

 

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

app.use('/api/v1/deps', depsRouter)
app.use('/api/v1/emps', empsRouter)





app.get('/', (req, res) => res.send('Hello World!sss'))


const start = async () => {
 try {
  await connectDB('mongodb://localhost:27017/se');
  app.listen(port, () =>
   console.log(`Server is listening on port ${port}...`)
  );
 } catch (error) {
  console.log(error);
 }
};

start();