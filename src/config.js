const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "eddyv-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://gwewytjzn4.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_h8cWFkOfN",
    APP_CLIENT_ID: "2a8dpq7vuh07grh5s9c8omthq0",
    IDENTITY_POOL_ID: "us-east-1:cd23cb63-3071-48f2-bca1-c66a9f0e45c5",
  },
};

export default config;