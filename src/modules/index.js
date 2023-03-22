import expressModules from './express.modules'
import sequelizeModules from './sequelize.modules'

export default {
  async init ({
    expressApp = null,
    expressRoutes = null,
    sequelizeInstance = null
  }) {
    await sequelizeModules(sequelizeInstance)
    await expressModules(expressApp, expressRoutes)
  }
}
