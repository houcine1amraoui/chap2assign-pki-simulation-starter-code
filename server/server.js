import express from "express";
import crypto from "crypto";
import * as fs from "fs";
import axios from "axios";

const app = express();
app.use(express.json());

// The route to handle the request for its certificate from the client
app.get("/public", async (req, res) => {
  // 1. The server asks the CA to sign its public key
  // 2. The server sends its certificate to the client
});

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
