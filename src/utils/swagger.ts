export const createUserSwagger = {
  summary: 'Criação de usuário',
  description: 'Realiza a ciração de usuários',
  tags: ['Geral'],
  body: {
    type: 'object',
    required: ['nome', 'email', 'password'],
    properties: {
      nome: {
        type: 'string',
        description: 'Nome do usuário',
      },
      email: {
        type: 'string',
        description: 'Email do usuário',
      },
      password: {
        type: 'string',
        description: 'Senha do usuário',
      },
    },
  },
  response: {
    201: {
      description: 'Criação do usuário realizada com sucesso',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Usuário criado com sucesso',
          description: 'Mensagem de sucesso na criação do user',
        },
      },
    },
    400: {
      description: 'Erro na validação dos dados de entrada',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Erro na validação dos dados de entrada',
          description: 'Mensagem de erro de entrada dos dados do usuário',
        },
        issue: {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: { type: 'string' },
              description: 'Erros gerais sem campo específico',
            },
            properties: {
              type: 'object',
              additionalProperties: {
                type: 'object',
                properties: {
                  errors: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Lista de erros para o campo',
                  },
                },
              },
              description:
                'Objeto com cada campo contendo uma lista de erros específicos',
            },
          },
          example: {
            errors: [],
            properties: {
              nome: {
                errors: ['Too small: expected string to have >=3 characters'],
              },
            },
          },
          description: 'Estrutura de erros detalhados retornados pelo Zod',
        },
      },
    },
    409: {
      description: 'Email já existe no sistema',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Email já cadastrado no sistema',
          description: 'Mensagem de email já casdtrado no sistema',
        },
      },
    },
    500: {
      description: 'Erro desconhecido',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Erro desconhecido do sistema',
          description:
            'Essa mensagem vem quando quebra algo inesperado, fazendo-se necessário consultar uma ferramenta de logs',
        },
      },
    },
  },
}
export const authSwagger = {
  summary: 'Criação do token',
  description: 'Realiza a criação do token para autenticação',
  tags: ['Auth'],
  body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: {
        type: 'string',
        description: 'Email do usuário',
      },
      password: {
        type: 'string',
        description: 'Senha do usuário',
      },
    },
  },
  response: {
    200: {
      description: 'Token criado com sucesso',
      type: 'object',
      properties: {
        token: {
          type: 'string',
          example: 'sadsaaeofkçdlkffgd.fdsafjosdaijfoijgsf.dsafdsoiafd',
          description: 'Token JWT para autenticação',
        },
      },
    },
    400: {
      description: 'Credenciais de acesso invalidas ou inexistentes',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Credenciais de login invalidas',
          description: 'Mensagem de erro ao tentar logar com dados errados',
        },
      },
    },
    500: {
      description: 'Erro desconhecido',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Erro desconhecido do sistema',
          description:
            'Essa mensagem vem quando quebra algo inesperado, fazendo-se necessário consultar uma ferramenta de logs',
        },
      },
    },
  },
}
export const createUrlSwagger = {
  summary: 'Encurtamento da Url',
  description: 'Realiza o encurtamento da URL',
  tags: ['URL'],
  security: [
    {
      bearerAuth: [],
    },
  ],
  body: {
    type: 'object',
    required: ['urlToShorten'],
    properties: {
      urlToShorten: {
        type: 'string',
        description: 'Url para ser encurtada',
        example: 'https://www.google.com.br',
      },
    },
  },
  response: {
    200: {
      description: 'Url encutada com sucesso',
      type: 'object',
      properties: {
        url: {
          type: 'string',
          example: 'http://localhost:3333/urls/eusntr',
          description: 'Url encurtada',
        },
      },
    },
    400: {
      description: 'Erro na validação dos dados de entrada',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Erro na validação dos dados de entrada',
          description: 'Mensagem de erro de entrada dos dados do usuário',
        },
        issue: {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: { type: 'string' },
              description: 'Erros gerais sem campo específico',
            },
            properties: {
              type: 'object',
              additionalProperties: {
                type: 'object',
                properties: {
                  errors: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Lista de erros para o campo',
                  },
                },
              },
              description:
                'Objeto com cada campo contendo uma lista de erros específicos',
            },
          },
          example: {
            errors: [],
            properties: {
              nome: {
                errors: ['Too small: expected string to have >=3 characters'],
              },
            },
          },
          description: 'Estrutura de erros detalhados retornados pelo Zod',
        },
      },
    },
    500: {
      description: 'Erro desconhecido',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Erro desconhecido do sistema',
          description:
            'Essa mensagem vem quando quebra algo inesperado, fazendo-se necessário consultar uma ferramenta de logs',
        },
      },
    },
  },
}
export const aliasSwagger = {
  summary: 'Redireciona para a URL original pelo alias',
  description:
    'Verifica o alias e realiza o redirecionamento para a URL original encurtada',
  tags: ['Geral'],
  params: {
    type: 'object',
    required: ['alias'],
    properties: {
      alias: {
        type: 'string',
        description: 'Código do alias da URL, deve conter exatamente 6 dígitos',
        example: '123456',
      },
    },
  },
  response: {
    200: {
      description: 'Redireciona para a URL original',
      content: {
        'text/html': {
          schema: {
            type: 'string',
            description: 'O navegador é redirecionado para a URL original',
            example: 'https://www.exemplo.com',
          },
        },
      },
    },
    400: {
      description: 'Erro na validação dos dados de entrada',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Erro na validação dos dados de entrada',
          description: 'Mensagem de erro geral da validação',
        },
        issue: {
          type: 'object',
          properties: {
            errors: {
              type: 'array',
              items: { type: 'string' },
              description: 'Erros gerais sem campo específico',
            },
            properties: {
              type: 'object',
              additionalProperties: {
                type: 'object',
                properties: {
                  errors: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Lista de erros para o campo',
                  },
                },
              },
              description: 'Erros detalhados por campo',
            },
          },
          example: {
            errors: [],
            properties: {
              alias: {
                errors: ['O alias deve ter exatamente 6 dígitos'],
              },
            },
          },
          description: 'Estrutura de erros detalhados retornados pelo Zod',
        },
      },
    },
    404: {
      description: 'Alias não encontrado',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Url não encontrada',
          description: 'Mensagem quando o alias informado não existe no banco',
        },
      },
    },
    500: {
      description: 'Erro desconhecido do servidor',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Erro desconhecido do sistema',
          description: 'Mensagem de erro genérico, útil para logs e debugging',
        },
      },
    },
  },
}
export const buscaUrlsSwagger = {
  summary: 'Busca URLs do usuário autenticado',
  description:
    'Retorna todas as URLs encurtadas associadas ao usuário autenticado.',
  tags: ['URL'],
  security: [
    {
      bearerAuth: [],
    },
  ],
  response: {
    200: {
      description: 'Lista de URLs do usuário',
      type: 'object',
      properties: {
        urls: {
          type: 'array',
          description: 'Lista de URLs encurtadas do usuário',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', example: 'sadasd-das-sad-asd-sa' },
              alias: { type: 'string', example: '123456' },
              url: { type: 'string', example: 'https://exemplo.com' },
              counter: { type: 'number', example: '1' },
            },
          },
        },
      },
      example: {
        urls: [
          {
            id: 'dcb7ea67-15ad-4503-b3be-825ebbf80ace',
            alias: '123456',
            url: 'https://exemplo.com',
          },
          {
            id: 'dcb7ea67-15ad-4503-b3be-825ebbf80ace',
            alias: '654321',
            url: 'https://google.com',
          },
        ],
      },
    },
    404: {
      description: 'Usuário não possui URLs cadastradas',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Você não possui URLs',
        },
      },
    },
    500: {
      description: 'Erro interno do servidor',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Erro desconhecido do sistema',
        },
      },
    },
  },
}
export const updateUrlSwagger = {
  summary: 'Atualiza uma URL encurtada do usuário autenticado',
  description:
    'Permite ao usuário autenticado atualizar a URL original de um link encurtado já existente.',
  tags: ['URL'],
  security: [
    {
      bearerAuth: [],
    },
  ],
  body: {
    type: 'object',
    required: ['id_url', 'new_url'],
    properties: {
      id_url: {
        type: 'string',
        description: 'ID da URL a ser atualizada',
        example: 'dcb7ea67-15ad-4503-b3be-825ebbf80ace',
      },
      new_url: {
        type: 'string',
        description: 'Nova URL que substituirá a original',
        example: 'https://novosite.com',
      },
    },
  },
  response: {
    200: {
      description: 'URL atualizada com sucesso',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Url atualizada com sucesso para https://novosite.com',
        },
      },
    },
    404: {
      description: 'URL não encontrada para o usuário autenticado',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Url não encontrada',
        },
      },
    },
    500: {
      description: 'Erro interno do servidor',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Erro desconhecido do sistema',
        },
      },
    },
  },
}
export const deleteUrlSwagger = {
  summary: 'Deleta uma URL do usuário autenticado',
  description:
    'Permite ao usuário autenticado remover uma URL encurtada pelo seu ID.',
  tags: ['URL'],
  security: [
    {
      bearerAuth: [],
    },
  ],
  body: {
    type: 'object',
    required: ['id_url'],
    properties: {
      id_url: {
        type: 'string',
        description: 'ID da URL a ser deletada',
        example: 'dcb7ea67-15ad-4503-b3be-825ebbf80ace',
      },
    },
  },
  response: {
    204: {
      description: 'URL deletada com sucesso. Sem conteúdo retornado.',
      type: 'null',
    },
    404: {
      description: 'URL não encontrada para o usuário autenticado',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'url não encontrada',
        },
      },
    },
    500: {
      description: 'Erro interno do servidor',
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Erro desconhecido do sistema',
        },
      },
    },
  },
}
