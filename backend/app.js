const express = require('express')
const app = express()
const port = 3000
const cors =  require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')

const depsRputer = require('./routes/departments')
const empsRouter = require('./routes/employees')

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())



app.use('/api/v1/deps', depsRputer)
app.use('/api/v1/emps', empsRouter)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))