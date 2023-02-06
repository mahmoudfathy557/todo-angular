const fs = require('node:fs/promises')
const path = require('node:path')
const {
  readSpecificDbData,
  readAllDbData,
  writeDbData,
} = require('../middleware/manipulate-data')
const dbPath = path.join(__dirname, '../db') + '/db.json'

 
const getAllDepartments = async (req, res) => {
  try {
    const deps = await readSpecificDbData(dbPath, 'departments')

    res.status(200).json(deps)
  } catch (error) {
    console.log(error)
  }
}

const addDepartment = async (req, res) => {
  const newDep = req.body
  try {
    const db = await readAllDbData(dbPath)
    const deps = await readSpecificDbData(dbPath, 'departments')

    deps.push(newDep)

    await writeDbData(dbPath, { ...db, departments: deps })

    res.status(200).json({ status: 'ok', msg: 'new dep is added' })
  } catch (error) {
    console.log(error)
  }
}

const deleteDepartment = async (req, res) => {
  const { id } = req.params

  try {
    const db = await readAllDbData(dbPath)
    const deps = await readSpecificDbData(dbPath, 'departments')

    let newDeps = deps.filter((dep) => Number(dep.id) !== Number(id))
    await writeDbData(dbPath, { ...db, departments: newDeps })

    res.status(200).json({ status: 'ok', msg: 'new dep is added' })
  } catch (err) {
    console.log(err)
  }
}

const updateDepartment = async (req, res) => {
  const { id } = req.params
  const updatedDep = req.body

  try {
    const db = await readAllDbData(dbPath)
    let deps = await readSpecificDbData(dbPath, 'departments')

    let prevDep = deps.findIndex((obj) => Number(obj.id) === Number(id))
    deps[prevDep] = updatedDep
    await writeDbData(dbPath, { ...db, departments: deps })

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
