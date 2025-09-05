import { prisma } from '@/lib/prisma'
import { IUrlsRepository } from '@/types/repsoitory'
import { Urls } from '@prisma/client'

export class UrlsRepository implements IUrlsRepository {
  public async createUrl(
    url: string,
    alias: string,
    users_id?: string,
  ): Promise<Urls> {
    const query = {
      data: {
        url,
        alias,
        ...(users_id && { users_id }),
      },
    }
    const d = await prisma.urls.create(query)

    return d
  }

  public async updateUrl(
    newUrl: string,
    id_url: string,
    users_id: string,
  ): Promise<number> {
    const url = await prisma.urls.updateMany({
      where: {
        id: id_url,
        status: 1,
        users_id,
      },
      data: {
        url: newUrl,
        updated_at: new Date(),
      },
    })

    return url.count
  }

  public async listUrls(users_id: string): Promise<Urls[]> {
    const urls = await prisma.urls.findMany({ where: { users_id, status: 1 } })

    return urls
  }

  public async deleteUrl(users_id: string, id_url: string): Promise<number> {
    const deleted = await prisma.urls.updateMany({
      where: {
        id: id_url,
        users_id,
        status: 1,
      },
      data: {
        status: 0,
        deleted_at: new Date(),
      },
    })

    return deleted.count
  }

  public async checkOwner(users_id: string, id_url: string) {
    const check = await prisma.urls.findFirst({
      where: { users_id, id: id_url, status: 1 },
    })

    return check
  }

  public async findUrlByAlias(alias: string) {
    const url = await prisma.urls.findFirst({ where: { alias, status: 1 } })

    return url
  }

  public async addCount(id: string) {
    const url = await prisma.urls.update({
      where: { id },
      data: { counter: { increment: 1 } },
    })

    return url
  }
}
