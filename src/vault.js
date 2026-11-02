"use strict";

// Custom error for missing or corrupted keys
class InvalidKeyError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidKeyError";
    }
}

// Custom error for incorrect keys
class VaultLockedError extends Error {
    constructor(message) {
        super(message);
        this.name = "VaultLockedError";
    }
}

// Vault access function
function accessVault(key) {
    if (key === undefined || Number.isNaN(key)) {
        throw new InvalidKeyError("Key is missing or corrupted");
    }

    if (key !== "SECRET_123") {
        throw new VaultLockedError("Incorrect key provided");
    }

    return "Access Granted";
}

// Test the vault
console.log(accessVault("SECRET_123"));
