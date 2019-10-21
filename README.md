# AWS Region Display
# AWS Regions

Transposit can create simple APIs. In this sample app, Transposit exposes a list of all AWS regions to which you have access (and that have the EC2 service running in them).

## Before you start

You need a free Transposit account and an AWS account. The AWS user needs to have programmatic access (you need an `aws_access_key_id` and a `aws_secret_access_key`) and `AmazonEC2ReadOnlyAccess` permissions.

## Transposit setup

  * Fork the app [https://console.transposit.com/t/transposit-sample/aws_regions](https://console.transposit.com/t/transposit-sample/aws_regions) (find the Fork button at the top of the editor view).
  * Navigate to **Deploy > Production Keys** and add a key for the `aws_ec2` data connector.
  * Navigate to **Deploy > Endpoints** and note the URL of the `aws_regions` webhook, something like `https://aws-regions.transposit.io/api/v1/execute-http/aws_regions`.
  * Open up that URL and you should see all your regions as a JSON array.

## Go further

Consider upgrading this to show the list of [availability zones](/docs/references/connectors/aws-ec2-documentation/#describe_availability_zones) as well as regions.
