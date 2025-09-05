import { IvalidCredencialsError } from '@/erros/userErros'
import { UserRespository } from '@/repositories/usuarioRespository'
import { Users } from '@prisma/client'
import { compare } from 'bcryptjs'

interface AuthUserRequest {
  email: string
  password: string
}

interface AuthUserResponse {
  user: Users
}

export class AuthenticateUserService {
  constructor(private userRepository: UserRespository) {}

  async execute({
    email,
    password,
  }: AuthUserRequest): Promise<AuthUserResponse> {
    const user = await this.userRepository.findEmail(email)

    if (!user) {
      throw new IvalidCredencialsError()
    }

    const isPassWordMatch = await compare(password, user.password_hash)

    if (!isPassWordMatch) {
      throw new IvalidCredencialsError()
    }

    return {
      user,
    }
  }
}
