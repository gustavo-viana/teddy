import { EmailExists } from '@/erros/userErros'
import { IUserRepository } from '@/types/repsoitory'
import { Users } from '@prisma/client'
import { hash } from 'bcryptjs'

interface ICreateResponse {
  user: Users
}
export class UsersService {
  constructor(private userRespository: IUserRepository) {}

  private async checkEmail(email: string) {
    const check = await this.userRespository.findEmail(email)
    if (check) throw new EmailExists() // se existe algo em check quer dizer que o email existia força o erro.
    return true
  }

  public async createUserService({
    nome,
    email,
    password,
  }: ICreateUser): Promise<ICreateResponse> {
    await this.checkEmail(email) // checagem do email
    const passwordHash = await hash(password, 4) // faz um hash 4x da senha original para maior segurança

    const user = await this.userRespository.createUser({
      name: nome,
      email,
      password_hash: passwordHash,
    })

    return { user }
  }
}
