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

// Automated test function
function testVault(description, testFunction) {
    try {
        if (testFunction()) {
            console.log("PASS: " + description);
        } else {
            console.log("FAIL: " + description);
        }
    } catch (e) {
        console.log("FAIL: " + description);
        console.log(e.message);
    }
}

// Test 1: Correct key
testVault("Correct key grants access", function() {
    return accessVault("SECRET_123") === "Access Granted";
});

// Test 2: Undefined key
testVault("Undefined key throws InvalidKeyError", function() {
    try {
        accessVault(undefined);
        return false;
    } catch (e) {
        return e instanceof InvalidKeyError;
    }
});

// Test 3: NaN key
testVault("NaN key throws InvalidKeyError", function() {
    try {
        accessVault(NaN);
        return false;
    } catch (e) {
        return e instanceof InvalidKeyError;
    }
});

// Test 4: Incorrect key
testVault("Wrong key throws VaultLockedError", function() {
    try {
        accessVault("WRONG_KEY");
        return false;
    } catch (e) {
        return e instanceof VaultLockedError;
    }
});

// Run the regular vault demonstrations
console.log("\n--- Vault Demonstrations ---");
attemptEntry("SECRET_123");
attemptEntry("WRONG_KEY");
attemptEntry(undefined);

console.log("\n--- Phase 5: Manual Testing ---");

// Test different types of inputs
attemptEntry("");
attemptEntry(12345);
attemptEntry(null);
attemptEntry({});
attemptEntry([]);
attemptEntry("SECRET_123");
