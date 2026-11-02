Phase 1: The Vault Foundation

In this phase, I created the basic vault system using a function called accessVault(key). The function checks whether the entered key matches "SECRET_123". If it matches, it returns "Access Granted". Otherwise, it returns "Access Denied".

I also added "use strict"; at the beginning of my JavaScript file. Strict mode acts as a safety net because it helps catch common coding mistakes and prevents certain unsafe JavaScript behaviors. This makes the code more reliable and easier to debug.

------------------

Phase 2: The Security Layer

In this phase, I created two custom error classes called InvalidKeyError and VaultLockedError. I updated the accessVault() function to throw an error when the key is missing, corrupted, or incorrect.

Returning a value is different from throwing an error because returning gives back a normal result, while throwing signals that something went wrong. A developer might prefer custom error classes because they make it easier to identify and handle different types of problems.

------------------

Phase 3: The Safety Protocol

In this phase, I created a function called attemptEntry(key) that uses try, catch, and finally to handle errors. The try block attempts to access the vault, while the catch block checks which type of error occurred using instanceof. It displays a different message depending on the error.

The finally block always runs whether the vault access succeeds or fails. A real-world example would be closing a file after a program finishes using it. This helps prevent resources from being left open and keeps the program stable.

------------------

Phase 4: The Audit Suite

In this phase, I created automated tests to check whether the vault works correctly. I tested a correct password, an undefined key, a NaN key, and an incorrect password. The tests check whether the expected results or custom errors occur.

Automated testing is more reliable than manual testing because it can run the same checks repeatedly and consistently. I learned that when an error is thrown, normal execution stops and moves to the catch block, where the error can be checked and handled.

------------------

Phase 5: Validation & Reflection

In this phase, I manually tested my vault using different inputs, including empty strings, numbers, null, objects, and arrays. The program handled these inputs without crashing because the try/catch/finally blocks caught the errors.

I learned that testing different types of inputs is important because users may enter unexpected values. My custom error classes helped identify different problems, and the finally block ensured that every vault attempt was completed.

I did not make major changes because the program handled the test cases as expected.
