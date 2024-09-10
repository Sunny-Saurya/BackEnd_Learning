const express =  require('express');

const app = express();
const jwt = require('jsonwebtoken');

const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8);

const jwtPassword = "secret";

function singJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username)
    const passwordResponse = passwordSchema.safeParse(password)

    if(!usernameResponse.success || !passwordResponse.success){
        return {error: "Invalid username or password"}
    }

    const signature = jwt.sign({
        username,
    }, jwtPassword)
    return signature;
}

function verifyJwt(token){
    let ans = true;
    try{

        const varified = jwt.verify(token, jwtPassword);
    
        if(varified){
            return true
        }
        else{
            ans = false;
        }
    }
    catch(e){

    }
    return false
}

function decodeJwt(token){
    const decoded = jwt.decode(token)

    if(decoded){
        return true;
    }
    else{
        return false;
    }
}


// replit code to practice 

// const express =  require('express');

// const app = express();
// const jwt = require('jsonwebtoken');

// const zod = require('zod');

// const emailSchema = zod.string().email();
// const passwordSchema = zod.string().min(8);

// const jwtPassword = "secret";

// function signJwt(username, password){
//     const usernameResponse = emailSchema.safeParse(username)
//     const passwordResponse = passwordSchema.safeParse(password)

//     if(!usernameResponse.success || !passwordResponse.success){
//         return {error: "Invalid username or password"}
//     }

//     const signature = jwt.sign({
//         username,
//     }, jwtPassword)
//     return signature;
// }
// const ans = signJwt("sunnykumar@gmail.com", "123477");
// console.log(ans);

// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// const zod = require('zod');

// function decodeJwt(token){
//     const decoded = jwt.decode(token)

//     if(decoded){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const ans = decodeJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.')
// console.log(ans);

// const jwt = require('jsonwebtoken');
// const jwtPassword = "secret";

// function verifyJwt(token){
//     let ans = true;
//     try{

//         const varified = jwt.verify(token, jwtPassword);

//         if(varified){
//             return true
//         }
//         else{
//             ans = false;
//         }
//     }
//     catch(e){

//     }
//     return false
// }

// const ans = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN1bm55a3VtYXJAZ21haWwuY29tIiwiaWF0IjoxNzI1OTY3ODIzfQ.pWkWaZNPozfW6FFSmBvHnzly2grBNBEY51TIWOvxRlw")
// console.log(ans);

