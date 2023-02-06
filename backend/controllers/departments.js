const fs = require('node:fs/promises')
const path = require('node:path')
const dbPath = path.join(__dirname, '../db') + '/db.json'

// const db = require('../db/db.json')

const getAllDepartments = async (req, res) => {
  try {
    const db = await fs.readFile(dbPath, 'utf-8')
    const parsedData = JSON.parse(db)
    const deps = parsedData.departments

    res.status(200).json(deps)
  } catch (error) {
    console.log(error)
  }
}

const addDepartment = async (req, res) => {
  const newDep = req.body
  // const pathDirname = path.join(__dirname + path,'db.json')
  try {
    const db = await fs.readFile(dbPath, 'utf-8')
    const parsedData = JSON.parse(db)

    parsedData.departments.push(newDep)

    const result = await fs.writeFile(
      dbPath,
      JSON.stringify(parsedData, null, 2)
    )

    res.status(200).json({ status: 'ok', msg: 'new dep is added' })
  } catch (error) {
    console.log(error)
  }
}

const deleteDepartment = async (req, res) => {
  const { id } = req.params

  try {
    const db = await fs.readFile(dbPath, 'utf-8')
    const parsedDb = JSON.parse(db)
    let newDeps = parsedDb.departments.filter(
      (dep) => Number(dep.id) !== Number(id)
    )

    const result = await fs.writeFile(
      dbPath,
      JSON.stringify({ ...parsedDb, departments: newDeps }, null, 2)
    )
    console.log(result)
    res.status(200).json({ status: 'ok', msg: 'new dep is added' })
  } catch (err) {
    console.log(err)
  }
}

const updateDepartment = async (req, res) => {
  const { id } = req.params
  const updatedDep = req.body

  try {
    const db = await fs.readFile(dbPath, 'utf-8')
    const parsedDb = JSON.parse(db)
    let deps = [...parsedDb.departments]
    prevDep = deps.findIndex((obj) => Number(obj.id) === Number(id))
    deps[prevDep] = updatedDep

    await fs.writeFile(
      dbPath,
      JSON.stringify({ ...parsedDb, departments: deps }, null, 2)
    )
    res.status(200).json({ status: 'ok', msg: '  dep is updated' })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAllDepartments,
  addDepartment,
  deleteDepartment,
  updateDepartment,
}
