import { compare } from 'bcryptjs'
import { expect, describe, it, beforeEach } from 'vitest'
import { UsersService } from './userService'
import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-usersRespository'
import { EmailExists } from '@/erros/userErros'

// Teste Unitario
let inMemoryUsers: InMemoryUserRepository
let sut: UsersService

describe('User Tests', () => {
  beforeEach(() => {
    inMemoryUsers = new InMemoryUserRepository()
    sut = new UsersService(inMemoryUsers)
  })

  it('Deve ser possivel criptografar a senha do usuário', async () => {
    const { user } = await sut.createUserService({
      nome: 'Gustavo Viana',
      email: 'gustavo@hotmail.com',
      password: '123456',
    })
    const isPasswordEquals = await compare('123456', user.password_hash)

    expect(isPasswordEquals).toBe(true)
  })

  it('Nao deve ser possivel se cadastrar com o mesmo email', async () => {
    const email = 'gustavo@hotmail.com'
    await sut.createUserService({
      nome: 'Gustavo Viana',
      email,
      password: '123456',
    })

    await expect(() =>
      sut.createUserService({
        nome: 'Gustavo Viana',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(EmailExists)
  })

  it('Deve ser possivel se registrar', async () => {
    const { user } = await sut.createUserService({
      nome: 'Gustavo Viana',
      email: 'gustavo@hotmail.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })
})
