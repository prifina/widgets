#!/bin/bash 

aws s3 sync avatar-widget-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/ujWBeKugg514AVaE4UyaDx/0.0.1/ --region eu-west-1 --profile prifina-123
aws s3 sync dataTest-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/x866fscSq5Ae7bPgUtb6ffB/0.0.1/ --region eu-west-1 --profile prifina-123
aws s3 sync dry-run-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/x3LSdcSs1kcPskBWBJvqGto/0.0.1/ --region eu-west-1 --profile prifina-123
aws s3 sync fitbit-activity-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/aW5R354gKsH5PzJQnLzxKZ/0.0.1/ --region eu-west-1 --profile prifina-123
aws s3 sync fitbit-effort-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/hAH72zcWDwsYBAXmQrh956/0.0.1/ --region eu-west-1 --profile prifina-123
aws s3 sync fitbit-heart-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/v6wczoGYX1GYEpqvDPkvjr/0.0.1/ --region eu-west-1 --profile prifina-123
aws s3 sync fitbit-sleep-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/eMU92Wmrug9hzSe93yLTTm/0.0.1/ --region eu-west-1 --profile prifina-123
aws s3 sync holistic-health-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/sCUiMz2m9JsRSnRJ5favnP/0.0.1/ --region eu-west-1 --profile prifina-123
aws s3 sync oura-activity-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/jFbbgeS5WbfiNtngLmQ4ka/0.0.1/ --region eu-west-1 --profile prifina-123
aws s3 sync oura-effort-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/J2Q3FoSU1BKmCemMwTUWEbg/0.0.1/ --region eu-west-1 --profile prifina-123
aws s3 sync oura-heart-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/Pm35HnTPCc9C1EdR72uZFuD/0.0.1/ --region eu-west-1 --profile prifina-123
aws s3 sync oura-sleep-v2/dist/ s3://prifina-apps-352681697435-eu-west-1/Ami8CwNxgrHGTRdhbxLgABi/0.0.1/ --region eu-west-1 --profile prifina-123