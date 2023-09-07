require("dotenv").config();

const config = {
  azureStorageConnectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
  clientId: process.env.CLIENT_ID,
  authority: process.env.AUTHORITY,
  redirectUri: process.env.REDIRECT_URI,
};

module.exports = config;
