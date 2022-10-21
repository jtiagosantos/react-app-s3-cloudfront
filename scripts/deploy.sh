USER=$1
BUCKET_NAME=$2
DISTRIBUTION_ID=$3

echo "Install dependecies"
# Install dependencies
yarn --production

echo "Build app"
# Build
yarn build

echo "Sync app with S3 Bucket"
# Sync build with our S3 bucket
aws s3 sync --delete build s3://$BUCKET_NAME --profile $USER

echo "Invalidate CloudFront cache"
# Invalidate cache
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --no-cli-pager --profile $USER