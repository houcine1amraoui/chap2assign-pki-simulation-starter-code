import * as fs from "fs";
import * as crypto from "crypto";
import express from "express";

const app = express();
app.use(express.json());

// The route to handle requests for the CA's public key
app.get("/public", (req, res) => {
  // Send CA's public key
});

// The route to handle requests for signing serevr's public key
app.post("/sign", (req, res) => {
  // 1. Retrieve server's public key
  // 2. Sign server's public key
  // 3. Create a certificate containing (public key + singed public key)
  // 4. Send the certificate
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
