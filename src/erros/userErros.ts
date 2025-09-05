export class EmailExists extends Error {
  constructor() {
    super('Email já existe')
  }
}

export class IvalidCredencialsError extends Error {
  constructor() {
    super('Credenciais de login invalidas')
  }
}
