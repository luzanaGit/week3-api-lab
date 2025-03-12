const express = require('express');
const app = express();
const PORT = 4001;

app.use(express.json());

// Sample User Data
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Login Endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ message: 'Login successful', userId: user.id });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});