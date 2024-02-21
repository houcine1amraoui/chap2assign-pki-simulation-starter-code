import axios from "axios";
import crypto from "crypto";

// 1. The client asks the server for its certificate (original public key + signed public key)

// 2. The client asks the certificate authority for its public key

// 3. The client verifies the signature of server's public key using the CA's public key
