import { CountryModel, UserModel } from '../models'

export default async function (sequelizeInstance) {
    if (!sequelizeInstance || !sequelizeInstance.sync) return

    // COUNTRYMODEL
    CountryModel.hasMany(UserModel, { foreignKey: 'fk_country' })

    // USERMODEL
    UserModel.belongsTo(CountryModel, { foreignKey: 'fk_country' })

    // KYCMODEL
    //   KycModel.belongsTo(UserModel, { foreignKey: 'fk_user' })
    //   KycModel.belongsTo(CountryModel, { foreignKey: 'fk_country' })

    // await sequelizeInstance
    //     .sync({
    //         alter: true,
    //     })
    //     .then(() => {
    //         console.log('All models has been created successfully')
    //     })
    //     .catch((err) => console.log(err))
    return sequelizeInstance
}
