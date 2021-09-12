import dynamoose from 'dynamoose'
process.env.FUNCIONARIOS_TABLE = 'serverless-challenge-employee-test'
dynamoose.aws.sdk.config.update({
  region: 'us-east-1'
})
dynamoose.aws.ddb.local()
