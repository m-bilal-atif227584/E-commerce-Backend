import database from "../Database/db.js";

export async function createUserTable() {
    try {
        const query = `
        CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(100) NOT NULL CHECK (char_length(name) >= 3),
        email VARCHAR(100) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role VARCHAR(10) DEFAULT 'User' CHECK (role IN ('User', 'Admin')),
        avatar JSONB DEFAULT NULL,
        reset_password_token TEXT DEFAULT NULL,
        reset_password_expire TIMESTAMP DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
        );
        `  //gen_random_uuid() will generate random id. We declared id as Primary key. Primary is the column of table in DB whose all values/records are unique/different from each other.VARCHAR() includes only numbers and alphabets and TEXT includes special characters also.In name we applied a check that its value will not contain characters less than 3.JSONB postgres ka wo format hai jisme data object form me ya poora object store ho jata hai. role me hum check kar rahe k user ya to user hoga ya to admin. 
        await database.query(query);
    } catch (error) {
        console.error("error creating user table:", error);
        process.exit(1);
    }
}