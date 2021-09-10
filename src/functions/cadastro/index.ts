import { handlerPath } from '@libs/handlerResolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'funcionario/{id}'
      }
    },
    {
      http: {
        method: 'post',
        path: 'funcionario'
      }
    },
    {
      http: {
        method: 'put',
        path: 'funcionario/{id}'
      }
    },
    {
      http: {
        method: 'delete',
        path: 'funcionario/{id}'
      }
    }
  ]
}
