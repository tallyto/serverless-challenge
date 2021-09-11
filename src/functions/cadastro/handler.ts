import 'source-map-support/register'
import { middyfy } from '@libs/lambda'
import { funcionarioFactory } from '@factory/funcionario-factory'

export interface HandlerResponse {
  statusCode: number
  body: string
}

const cadastro = async (event: any): Promise<HandlerResponse> => {
  const funcionario = funcionarioFactory()
  let result = null
  const { httpMethod, body } = event
  const id = event.pathParameters ? event.pathParameters.id : null

  try {
    switch (httpMethod) {
      case 'GET':
        result = await funcionario.find(id)
        break
      case 'POST':
        result = await funcionario.create(body)
        break
      case 'PUT':
        result = await funcionario.update(id, body)
        break
      case 'DELETE':
        result = await funcionario.delete(id)
        break
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ result })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error })
    }
  }
}

export const main = middyfy(cadastro)
