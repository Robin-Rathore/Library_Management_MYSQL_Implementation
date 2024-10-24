import bcrypt from "bcrypt"
import { queryDatabase } from "../db.js";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken"
dotenv.config();


// REGISTRATION
export const registerUser = async (req, res) => {
    const { name, email, password, role, membership_type } = req.body;

    const validRoles = ['student', 'staff', 'admin'];
    const validMemberships = ['regular', 'premium'];

    if (!validRoles.includes(role)) {
        return res.status(400).json({ message: "Invalid role provided." });
    }

    if (!validMemberships.includes(membership_type)) {
        return res.status(400).json({ message: "Invalid membership type provided." });
    }

    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO users (name, email, password_hash, role, membership_type) VALUES (?, ?, ?, ?, ?)';
        await queryDatabase(sql, [name, email, passwordHash, role, membership_type]);

        res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: "Email already exists." });
        }
        console.error("Error Registering User:", error);
        res.status(500).json({ message: "Server Error" });
    }
};


// LOGIN
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log("Email: " + email); // Log the email
    try {
        const sql = 'SELECT * FROM users WHERE email = ?'; // Use parameter placeholder
        console.log("Executing SQL:", sql, "with params:", [email]);
        const [users] = await queryDatabase(sql, [email]);

        // console.log("Query Result:", users); // Log the result

        if (!users || users.length === 0) {
            console.log("User not found for email:", email); // Log for debugging
            return res.status(401).json({ message: "User does not exist, please register" });
        }

        const isPasswordValid = await bcrypt.compare(password, users.password_hash); // Use 'password_hash'

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: users.user_id, role: users.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });

    } catch (error) {
        console.error('Error logging in user:', error.message || error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
