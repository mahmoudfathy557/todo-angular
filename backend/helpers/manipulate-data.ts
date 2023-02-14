import { PathLike } from 'node:fs'
import fs = require('node:fs/promises')


class ManipulateData {
  
  readAllDbData = async <T>(path:string):Promise<T[]> => {
    const db = await fs.readFile(path, 'utf-8')
    const parsedData = JSON.parse(db)
    return parsedData
  }

  readSpecificDbData = async <T,Y>(path:PathLike, dataType:T):Promise<Y[]> => {
    const db = await fs.readFile(path, 'utf-8')
    const parsedData = JSON.parse(db)

  
      const wantedData  = parsedData[dataType]

      return wantedData
   
  }

  writeDbData = async <T>(path:string, data:T):Promise<void> => {
    await fs.writeFile(path, JSON.stringify(data, null, 2))
  }
}

export default new ManipulateData()
 