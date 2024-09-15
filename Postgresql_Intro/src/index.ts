// write a function to create a users table in database

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

async function createTable() {
  try {
    await client.connect();

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await client.query(createTableQuery);
    console.log('Table created successfully.');
  } catch (err) {
    console.error('Error creating table:', err);
  } finally {
    await client.end();
  }
}

createTable();
