import { UserRespository } from '@/repositories/usuarioRespository'
import { UsersService } from '@/services/userService'

export default function makeUserService() {
  const userRespository = new UserRespository()
  const user = new UsersService(userRespository)

  return user
}
