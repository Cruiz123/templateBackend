import express, { Router } from 'express'
import pkg from '../../../package.json'
import migrateServices from '../../services/migrate.services'

const testRouter = Router()

const app = express()

app.set('pkg', pkg)
testRouter.get('/', (req, res) => {
  try {
    const info = {
      name: app.get('pkg').name,
      description: app.get('pkg').description,
      version: app.get('pkg').version,
      author: app.get('pkg').author,
      success: true
    }

    res.json(info)
  } catch (error) {
    res.send({ error })
  }
})

testRouter.get('/countries', async (req, res) => {
  try {
    const { meta, msg } =
            await migrateServices.loadCountryInfofromExternalApi()

    res.send({ meta, msg })
  } catch (error) {
    res.send({ error })
  }
})

export default testRouter
