import { neon } from '@neondatabase/serverless'
import dotenv from 'dotenv';
dotenv.config();

const database = neon(process.env.DATABASE_CONNECTION_STRING)
// const {Client} = pkg; Client is for small apps and pool is for multi-user app. Pool is recomended for scaling. 

// console.log("🔍 DATABASE_CONNECTION_STRING =", process.env.DATABASE_CONNECTION_STRING?.split('@')[1]); // Safe partial log


// const database = new Pool({
//   connectionString: process.env.DATABASE_CONNECTION_STRING,
//   ssl: {
//     rejectUnauthorized: false, // important for Neon
//   },
// });

// try {
    // await database.connect();
//     console.log('Connected to DB successfully.');
// } catch (error) {
//     console.error("DB connection failed:", error);
//     process.exit(1);
// }

//In try catch connect database if you're using Client, but if you are using pool then there is no need to connect bcoz pool manages DB connections automatically.

export default database;
