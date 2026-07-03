// // // calculator.js
// // function addNumbers(a, b) {
// //     return a + b;
// // }

// // function subtractNumbers(a, b) {
// //     return a - b;
// // }

// // console.log(addNumbers(5, 3));


// // calculator.js
// function addNumbers(a, b) {
//     return a + b;
// }

// function subtractNumbers(a, b) {
//     return a - b;
// }

// function processPayment(user_id, amount) {
//     // BUG: Hardcoded secret key (Security issue)
//     const SECRET_STRIPE_KEY = "sk_live_1234567890abcdef";
    
//     // BUG: Unused variable liger
//     let discount = 10;
    
//     // 
//     while(amount > 0) {
//         console.log("Processing 1 dollar...");
//         amount = amount - 1;
//     }
    
//     // BUG: Returning a raw SQL  vulnerable to injection
//     return "SELECT * FROM users WHERE id = " + user_id;
// }

// console.log(addNumbers(5, 3));



function authenticateUser(username, password) {
    // 🚨 BUG 1: Hardcoded AWS secret key (Security Risk)
    const AWS_SECRET = "AKIAIOSFODNN7EXAMPLE";
    
    // 🚨 BUG 2: SQL Injection vulnerability (Security Risk)
    let query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
    
    // 🚨 BUG 3: Unused variable (Code Quality)
    let is_admin = false;

    // 🚨 BUG 4: Infinite loop (Logic Error)
    while(true) {
        console.log("Checking database...");
        break; // Oops, actually it breaks immediately but it's weird logic
    }

    if(password == "admin123") {
        return true;
    }
    return false;
}