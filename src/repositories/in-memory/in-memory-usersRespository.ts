import { Prisma, Users } from '@prisma/client'
import { IUserRepository } from '@/types/repsoitory'

export class InMemoryUserRepository implements IUserRepository {
  public items: Users[] = []

  public async createUser(user: Prisma.UsersCreateInput) {
    const u = {
      id: 'we',
      name: user.name,
      email: user.email,
      password_hash: user.password_hash,
      created_at: new Date(),
    }

    this.items.push(u)

    return u
  }

  public async findEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }
}
