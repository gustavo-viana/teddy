import { FastifyReply, FastifyRequest } from 'fastify'
import { IvalidCredencialsError } from '../erros/userErros'
import makeAuthenticateService from '@/factory/authenticateFactory'

export async function authenticateUserController(
  request: FastifyRequest<{ Body: IAuthUser }>,
  reply: FastifyReply,
) {
  const { password, email } = request.body
  try {
    const authenticateService = makeAuthenticateService()
    const { user } = await authenticateService.execute({
      password,
      email,
    })
    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id,
        },
      },
    )
    return reply.status(200).send({ token })
  } catch (e) {
    if (e instanceof IvalidCredencialsError) {
      return reply.status(400).send({ message: e.message })
    }
    throw e
  }
}
