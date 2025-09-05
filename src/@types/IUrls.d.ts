interface ICreateUrls {
  urlToShorten: string
}

interface IFindUrls {
  alias: string
}

interface IUpdateUrl {
  id_url: string
  new_url: string
}
interface IDeletedUrls {
  id_url: string
}
