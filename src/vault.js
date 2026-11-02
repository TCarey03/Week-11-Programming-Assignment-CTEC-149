"use strict";

// Create the vault access function
function accessVault(key) {
    if (key === "SECRET_123") {
        return "Access Granted";
    } else {
        return "Access Denied";
    }
}

// Test the vault with different keys
console.log(accessVault("SECRET_123"));
console.log(accessVault("WRONG_KEY"));
console.log(accessVault("12345"));
console.log(accessVault(""));
