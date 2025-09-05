import { Prisma, Urls, Users } from '@prisma/client'

export interface IUserRepository {
  createUser(user: Prisma.UsersCreateInput): Promise<Users>
  findEmail(email: string): Promise<Users | null>
}

export interface IUrlsRepository {
  createUrl(url: string, alias: string, user_id?: string): Promise<Urls>
  updateUrl(newUrl: string, id_url: string, user_id: string): Promise<number>
  listUrls(user_id: string): Promise<Urls[]>
  deleteUrl(user_id: string, id_url: string): Promise<number>
  checkOwner(user_id: string, id_url: string): Promise<Urls | null>
  findUrlByAlias(alias: string): Promise<Urls | null>
  addCount(id: string): Promise<Urls>
}
