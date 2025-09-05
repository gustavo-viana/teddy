export class YouAreNotTheOwner extends Error {
  constructor() {
    super('Você não tem acesso ao objeto solicitado')
  }
}

export class UrlNotFind extends Error {
  constructor() {
    super('Endereço não encontrado')
  }
}

export class UrlsNotFound extends Error {
  constructor() {
    super('Endereço não encontrado')
  }
}
