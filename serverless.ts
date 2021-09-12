import type { AWS } from '@serverless/typescript'
import { resources } from './src/resources'
import cadastro from '@functions/cadastro'

const serverlessConfiguration: AWS = {
  service: 'serverless-challenge',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    },
    region: '${ self:provider.region}',
    stage: '${ self:provider.stage}',
    employeeTable: '${self:service}-employee-${self:provider.stage}'
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      FUNCIONARIOS_TABLE: '${self:custom.employeeTable}'
    },
    lambdaHashingVersion: '20201221',
    iamRoleStatements: [{
      Effect: 'Allow',
      Action: [
        'dynamodb:GetItem',
        'dynamodb:PutItem',
        'dynamodb:UpdateItem',
        'dynamodb:DescribeTable',
        'dynamodb:DeleteItem'],
      Resource: 'arn:aws:dynamodb:${self:provider.region}:*:table/*'
    }]
  },
  functions: { cadastro },
  resources: {
    Resources: resources
  }
}

module.exports = serverlessConfiguration
