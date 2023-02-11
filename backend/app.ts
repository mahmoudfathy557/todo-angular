import express  from 'express'
import cors from 'cors'
import helmet from 'helmet'
import xss from 'xss-clean'
const app = express()
const port = 3000

import depsRouter from './routes/departments'

// const depsRputer from './routes/departments'
// const empsRouter from './routes/employees'

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

app.use('/api/v1/deps', depsRouter)
// app.use('/api/v1/emps', empsRouter)





app.get('/', (req, res) => res.send('Hello World!sss'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
