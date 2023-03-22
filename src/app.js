import express from 'express'
import modules from './modules'
import { constants, sequelizeConfig } from './config'
import { api } from './api'

// IMPORT LOGGER
import Logger from './logs/logger.logs'

async function startServer() {
    const logger = new Logger({ enviroment: constants.NODE_ENV }).getLogger()

    const app = express()

    await modules.init({
        expressApp: app,
        expressRoutes: api(),
        sequelizeInstance: sequelizeConfig,
    })

    app.listen(constants.PORT, (err) => {
        if (err) {
            logger.error(err)
        }
        logger.info(`🚀 Server running on port ${constants.PORT}`)
        // console.log('Server is runing on port', constants.PORT)
    })
}

startServer()
