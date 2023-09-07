require("dotenv").config();

const config = {
  azureStorageConnectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
};

module.exports = config;
