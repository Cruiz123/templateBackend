import argon2 from 'argon2'
import moment from 'moment'

// Import Models
import { UserModel } from '../../models'

/* eslint-disable camelcase */
export default class EasyOnboarding {
    constructor({
        email,
        password,
        firstname,
        lastname,
        birthdate,
        phone,
        prefix,
        fk_country,
        is_active = false,
    }) {
        this.email = email
        this.password = password
        this.firstname = firstname
        this.lastname = lastname
        this.birthdate = birthdate
        this.phone = phone
        this.prefix = prefix
        this.fk_country = fk_country
        this.is_active = is_active
    }

    async createEasyOnboarding() {
        const userDTO = {
            email: this.email,
            password: await argon2.hash(this.password),
            firstname: this.firstname,
            lastname: this.lastname,
            birthdate: this.birthdate,
            phone: this.phone,
            prefix: this.prefix,
            fk_country: this.fk_country,
            is_active: this.is_active,
            created_at: moment().utc().format(),
        }

        const user = await UserModel.create(userDTO)

        return {
            meta: {
                action: true,
                result: 'Success',
            },
            msg: 'controllers.signup.success',
        }
    }

    async checkUser() {
        const user = await UserModel.findOne({ where: { email: this.email } })

        return user !== null
    }
}
