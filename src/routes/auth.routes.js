import {Router} from 'express'
import {login, register, logout, profile, verifyToken} from '../controllers/auth.controller.js'
import { authRequiered } from '../middlewares/validateToken.js'
import { validationSchema } from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = Router()

router.post('/register',validationSchema(registerSchema), register)

router.post('/login',validationSchema(loginSchema), login)

router.post('/logout', logout)

router.get('/verify', verifyToken)

router.get('/profile', authRequiered, profile)


export default router