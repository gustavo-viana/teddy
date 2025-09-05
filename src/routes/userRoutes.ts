import { FastifyInstance } from 'fastify'
import { createUserController } from '../controllers/usersController'
import { authSwagger, createUserSwagger } from '@/utils/swagger'
import { authenticateUserController } from '@/controllers/authenticateController'
import { verifyCreateUser, verifyGetToken } from '@/middlewares/verifyTypes'

export default async function usersRoutes(app: FastifyInstance) {
  app.post<{ Body: ICreateUser }>(
    '/create',
    { schema: createUserSwagger, preHandler: [verifyCreateUser] },
    createUserController,
  )
  app.post<{ Body: IAuthUser }>(
    '/sessions',
    { schema: authSwagger, preHandler: [verifyGetToken] },
    authenticateUserController,
  )
}
