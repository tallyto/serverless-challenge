import { FuncionarioController } from '@controller/funcionario-controller'
import { funcionarioModel } from '@model/funcionario-model'

export const funcionarioFactory = (): FuncionarioController => {
  return new FuncionarioController(funcionarioModel)
}
