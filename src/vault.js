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

// Master Access function
function attemptEntry(key) {
    try {
        console.log(accessVault(key));
    } catch (e) {
        if (e instanceof InvalidKeyError) {
            console.log("Security Alert: System corruption detected.");
        } else if (e instanceof VaultLockedError) {
            console.log("User Error: Please try again.");
        } else {
            throw e;
        }
    } finally {
        console.log("Vault attempt completed.");
    }
}

// Test the vault
attemptEntry("SECRET_123");
attemptEntry("WRONG_KEY");
attemptEntry(undefined);
attemptEntry(NaN);
