import { prisma } from '@/lib/prisma'
import { IUserRepository } from '@/types/repsoitory'
import { Prisma } from '@prisma/client'

export class UserRespository implements IUserRepository {
  public async createUser(data: Prisma.UsersCreateInput) {
    const user = await prisma.users.create({ data })
    return user
  }

  public async findEmail(email: string) {
    const find = prisma.users.findFirst({
      where: {
        email,
      },
    })
    return find
  }
}
