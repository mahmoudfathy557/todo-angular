const fs = require('node:fs/promises')
const path = require('node:path')
// const dbPath = path.join(__dirname, '../db') + '/db.json'

const readAllDbData = async (path) => {
  const db = await fs.readFile(path, 'utf-8')
  const parsedData = JSON.parse(db)
  return parsedData
}

const readSpecificDbData = async(path,dataType)=>{
    const db = await fs.readFile(path, 'utf-8')
    const parsedData = JSON.parse(db)
    const wantedData = parsedData[dataType]
    
    return wantedData
}


const writeDbData = async (path, data) => {
await fs.writeFile(
  path,
  JSON.stringify(data, null, 2)
)
}




module.exports = { readSpecificDbData, writeDbData, readAllDbData }