// Import Services
import authService from '../services/auth.services'

// Import Hooks
import { ApiError, ApiResponse } from '../hooks/http/type-response'

const authController = {}

authController.signup = async (req, res, next) => {
  try {
    const { meta, msg } = await authService.signup({ ...req.body })

    if (meta.action) {
      next(ApiResponse.successRequest(req.t(msg), meta))
    } else {
      next(ApiResponse.badRequest(req.t(msg), { action: meta.action }))
    }

    // res.json({ meta, msg })
  } catch (error) {
    next(
      ApiError.unprocessableEntity(
                `${error.message} | ${req.t('controllers errors')}`
      )
    )
    // res.send({ error })
  }
}

export default authController
