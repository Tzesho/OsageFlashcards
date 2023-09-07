const express = require("express");
const router = express.Router();
const { BlobServiceClient } = require("@azure/storage-blob");
const config = require("../config");

const AZURE_STORAGE_CONNECTION_STRING = config.azureStorageConnectionString;

router.get("/getBlob/:containerName/:blobName", async (req, res) => {
  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING
    );
    const containerClient = blobServiceClient.getContainerClient(req.params.containerName);
    const blobClient = containerClient.getBlobClient(req.params.blobName);

    const downloadBlockBlobResponse = await blobClient.download(0);

    // Pipe the blob's content to the response
    downloadBlockBlobResponse.readableStreamBody.pipe(res);
  } catch (error) {
    res.status(500).send(`Error retrieving blob: ${error.message}`);
  }
});

module.exports = router;
