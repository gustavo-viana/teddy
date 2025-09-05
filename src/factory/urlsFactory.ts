import { UrlsRepository } from '@/repositories/urlsRepository'
import { UrlsServices } from '@/services/urlsService'

export default function makeUrlsService() {
  const urlsRespository = new UrlsRepository()
  const urls = new UrlsServices(urlsRespository)

  return urls
}
