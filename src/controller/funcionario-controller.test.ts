import { funcionarioModel } from '@model/funcionario-model'
import { FuncionarioController } from './funcionario-controller'

describe('funcionario controller tests', () => {
  const funcionarioDefault = {
    nome: 'Tállyto',
    cargo: 'Back-end Developer',
    idade: 23
  }

  const sut = new FuncionarioController(funcionarioModel)
  it('deve cadastrar um funcionario', async () => {
    const funcionarioCadastrado = await sut.create(funcionarioDefault)
    expect(funcionarioCadastrado).toHaveProperty('id')
  })

  it('deve buscar um funcionario', async () => {
    const funcionarioCadastrado = await sut.create(funcionarioDefault)
    const funcionarioNoBanco = await sut.find(funcionarioCadastrado.id)
    expect(funcionarioCadastrado.id).toEqual(funcionarioNoBanco.id)
  })

  it('deve atualizar um funcionario', async () => {
    const funcionarioCadastrado = await sut.create(funcionarioDefault)
    const funcionarioAtualizado = await sut.update(funcionarioCadastrado.id, { nome: 'Tallyto Rodrigues' })
    expect(funcionarioAtualizado.nome).toEqual('Tallyto Rodrigues')
  })

  it('deve remover um funcionario', async () => {
    const funcionarioCadastrado = await sut.create(funcionarioDefault)
    const funcionarioAtualizado = await sut.delete(funcionarioCadastrado.id)
    expect(funcionarioAtualizado).toBeFalsy()
  })
})
