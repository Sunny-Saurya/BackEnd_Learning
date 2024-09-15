"use strict";
// write a function to create a users table in database
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import { Client } from 'pg'
// const client = new Client({
//     // neon db credentials
// //   host: 'postgresql://sdfsdfds_owner:axM75HOEYvyn@ep-cool-flower-a5696n85.us-east-2.aws.neon.tech/sdfsdfds?sslmode=require',
// //   port: 5334,
// //   database: '',
// //   user: 'sdfsdfds_owner',
// //   password: 'axM75HOEYvyn@ep',
// connectionString : "postgresql://sdfsdfds_owner:axM75HOEYvyn@ep-cool-flower-a5696n85.us-east-2.aws.neon.tech/sdfsdfds?sslmode=require"
// })
// client.connect()
// async function createUsersTable() {
//     const result = await client.query(`
//             CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//         `)
//         console.log(result);
// }
// createUsersTable();
// This is how we can create a table in neon db
const { Client } = require('pg');
const client = new Client({
    connectionString: 'postgresql://sdfsdfds_owner:axM75HOEYvyn@ep-cool-flower-a5696n85.us-east-2.aws.neon.tech/sdfsdfds?sslmode=require'
});
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
            yield client.query(createTableQuery);
            console.log('Table created successfully.');
        }
        catch (err) {
            console.error('Error creating table:', err);
        }
        finally {
            yield client.end();
        }
    });
}
createTable();
