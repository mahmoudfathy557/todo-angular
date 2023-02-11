const fs = require('node:fs/promises')
const path = require('node:path')
const dbPath = path.join(__dirname, '../db') + '/db.json'
//create http server
const getAllEmps = async (req, res) => {
  try {
    const db = await fs.readFile(dbPath, 'utf-8')
     const parsedData = JSON.parse(db)
    const emps = parsedData.employees

    res.status(200).json(emps)
  } catch (error) {
    console.log(error)
  }
}


const addEmp = async (req, res) => {
  const newEmp = req.body
  try {
    const db = await fs.readFile(dbPath, 'utf-8')
    const parsedData = JSON.parse(db)

    parsedData.employees.push(newEmp)

    const result = await fs.writeFile(
      dbPath,
      JSON.stringify(parsedData, null, 2)
    )

    res.status(200).json({ status: 'ok', msg: 'new emp is added' })
  } catch (error) {
    console.log(error)
  }
}

const deleteEmp = async (req, res) => {
  const { id } = req.params

  try {
    const db = await fs.readFile(dbPath, 'utf-8')
    const parsedDb = JSON.parse(db)
    let newEmps = parsedDb.employees.filter(
      (emp) => Number(emp.id) !== Number(id)
    )

    await fs.writeFile(
      dbPath,
      JSON.stringify({ ...parsedDb, employees: newEmps }, null, 2)
    )
    res.status(200).json({ status: 'ok', msg: 'new emp is added' })
  } catch (err) {
    console.log(err)
  }
}

const updateEmp = async (req, res) => {
  const { id } = req.params
  const updatedEmp = req.body

  try {
    const db = await fs.readFile(dbPath, 'utf-8')
    const parsedDb = JSON.parse(db)
    let emps = [...parsedDb.employees]
    prevEmp = emps.findIndex((obj) => Number(obj.id) === Number(id))
    emps[prevEmp] = updatedEmp

    await fs.writeFile(
      dbPath,
      JSON.stringify({ ...parsedDb, employees: emps }, null, 2)
    )
    res.status(200).json({ status: 'ok', msg: '  dep is updated' })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAllEmps,
  addEmp,
  deleteEmp,
  updateEmp,
}
