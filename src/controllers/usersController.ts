import { FastifyReply, FastifyRequest } from 'fastify'
import { EmailExists } from '../erros/userErros'
import makeUserService from '@/factory/userFactory'

export async function createUserController(
  request: FastifyRequest<{ Body: ICreateUser }>,
  reply: FastifyReply,
) {
  const { nome, password, email } = request.body
  try {
    const userRespository = makeUserService()
    await userRespository.createUserService({
      nome,
      password,
      email,
    })
  } catch (e) {
    if (e instanceof EmailExists) {
      return reply.status(409).send({ message: e.message })
    }
    throw e
  }
  return reply.status(201).send({ message: 'Usuario criado com sucesso' })
}
