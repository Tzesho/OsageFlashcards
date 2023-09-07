const express = require("express");
const { TableClient } = require("@azure/data-tables");
const config = require("../config");

const router = express.Router();

router.get("/getTable/:tableName", async (req, res) => {
  try {
    const tableClient = TableClient.fromConnectionString(
      config.azureStorageConnectionString,
      req.params.tableName
    );

    const entities = [];

    for await (const entity of tableClient.listEntities()) {
      entities.push(entity);
    }

    res.json(entities);
  } catch (error) {
    res.status(500).send(`Error accessing table: ${error.message}`);
  }
});

// POST route to create a new row in the specified table
router.post("/createRow/:tableName", async (req, res) => {
  try {
    const tableClient = TableClient.fromConnectionString(
      config.azureStorageConnectionString,
      req.params.tableName
    );

    const newRow = req.body; // Assuming the body contains the data for the new row

    // Ensure there's a partitionKey and rowKey in the body, as they are mandatory for Azure Tables
    if (!newRow.partitionKey || !newRow.rowKey) {
      return res.status(400).send("partitionKey and rowKey are required fields.");
    }

    const createEntityResponse = await tableClient.createEntity(newRow);
    res.status(201).json({
      message: "Row created successfully",
      date: createEntityResponse.date,
      requestId: createEntityResponse.requestId,
    });
  } catch (error) {
    res.status(500).send(`Error creating table row: ${error.message}`);
  }
});

module.exports = router;
