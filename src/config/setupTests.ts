import dynamoose from 'dynamoose'

dynamoose.aws.sdk.config.update({
  region: 'us-east-1'
})
dynamoose.aws.ddb.local()
