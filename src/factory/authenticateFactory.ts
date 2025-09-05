import { UserRespository } from '@/repositories/usuarioRespository'
import { AuthenticateUserService } from '@/services/authenticateService'

export default function makeAuthenticateService() {
  const userRespository = new UserRespository()
  const auth = new AuthenticateUserService(userRespository)

  return auth
}
