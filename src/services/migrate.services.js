import axios from 'axios'
import { CountryModel } from '../models'

const migrateServices = {}

migrateServices.loadCountryInfofromExternalApi = async function () {
  const uri = 'https://restcountries.com/v3.1/all'

  const requesOptions = {
    method: 'get',
    url: uri,
    responseType: 'json'
  }

  const { data } = await axios(requesOptions)

  const countries = Object.values(data)

  const countryDTO = countries.map((item) => {
    return {
      name: item.name.common,
      capital: item?.capital ? item.capital[0] : '-',
      cca3: item.cca3 || '-',
      timezones: item?.timezones[0] || '-',
      callingcode: item.idd?.root
        ? `${item.idd.root}${item.idd.suffixes[0]}`
        : '-',
      flagsvg: item.flags.svg || '-'
    }
  })

  await Promise.all(
    countryDTO.map(async (country) => {
      await CountryModel.create(country)
    })
  )

  return {
    meta: {
      action: true
    },
    msg: 'controllers.success'
  }
}

export default migrateServices
