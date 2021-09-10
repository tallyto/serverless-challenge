import 'source-map-support/register'
import { middyfy } from '@libs/lambda'
import { FuncionarioModel } from 'src/model/funcionario'

export interface HandlerResponse {
  statusCode: number
  body: string
}

const cadastro = async (event: any): Promise<HandlerResponse> => {
  if (event.httpMethod === 'GET') { // Buscar um funcionario
    const { id } = event.pathParameters
    const funcionario = await FuncionarioModel.get(id)
    return {
      statusCode: 200,
      body: JSON.stringify({ funcionario })
    }
  } else if (event.httpMethod === 'POST') { // Cadastrar um funcionario
    const funcionario = await FuncionarioModel.create(event.body)
    return {
      statusCode: 200,
      body: JSON.stringify({ funcionario })
    }
  } else if (event.httpMethod === 'PUT') { // Atualizar um funcionario
    const { id } = event.pathParameters
    const funcionario = await FuncionarioModel.get(id)
    const atualizarFuncionario = new FuncionarioModel({ ...funcionario, ...event.body })
    await atualizarFuncionario.save()
    return {
      statusCode: 200,
      body: JSON.stringify({ atualizarFuncionario })
    }
  } else if (event.httpMethod === 'DELETE') { // Remover um funcionario
    const { id } = event.pathParameters
    const funcionario = FuncionarioModel.delete(id)
    return {
      statusCode: 200,
      body: JSON.stringify({ funcionario })
    }
  }
}

export const main = middyfy(cadastro)
