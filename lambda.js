const AWS = require("aws-sdk");
const s3 = new AWS.S3();

async function getMetaInfoFromS3(key, bucket) {
  const metaInfo = await s3
    .headObject({ Key: key, Bucket: bucket })
    .promise()

  return metaInfo;
}

exports.handler = async function (_, context) {
  const metaInfo = await getMetaInfoFromS3("largefile1.txt", "fin-api-gs1");

  context.succeed(`file size is: ${metaInfo.ContentLength}`);
};
