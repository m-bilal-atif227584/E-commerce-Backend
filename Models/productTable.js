import database from "../Database/db.js";

export async function createProductsTable() {
    try {
        const query = `
        CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        price DECIMAL(9,2) NOT NULL CHECK(price >= 0),
        category VARCHAR(100) NOT NULL,
        ratings DECIMAL(3,2) DEFAULT 0 CHECK (ratings BETWEEN 0 AND 5),
        images JSONB DEFAULT '[]'::JSONB,
        stock INT NOT NULL CHECK (stock >= 0),
        created_by UUID NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE 
        );
        ` //FOREIGN KEY wo key hai jo aik table ko dusre table se joray unke beech connection banaye, jahan products and users tables k beech connection bana aur yahan jo created_by ki value hogi wo users table k kisi user ki id hogi. Aur ON DELETE CASCADE ka matlab hai agar users table me se user koi delete hua jiska create kia hua product yahan products table me tha to wo product bhi automatically delete kardo matlab jab user delete hoga to user se related uska baaki data bhi delete kar sakte hum dusre tables ka.
        await database.query(query);
    } catch (error) {
        console.error("error creating products table:", error);
        process.exit(1);
    }
}