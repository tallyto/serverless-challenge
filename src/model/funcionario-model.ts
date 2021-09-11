import * as dynamose from 'dynamoose'
import { Document } from 'dynamoose/dist/Document'

export interface FuncionarioModel extends Document {
  id: string
  nome: string
  idade: number
  cargo: string
}

const FuncionarioSchema = new dynamose.Schema({
  id: {
    hashKey: true,
    type: String
  },
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  cargo: {
    type: String,
    required: true,
    default: 'Não informado'
  }
}, {
  saveUnknown: true,
  timestamps: true
})

export const funcionarioModel = dynamose.model<FuncionarioModel>('funcionarios', FuncionarioSchema)
