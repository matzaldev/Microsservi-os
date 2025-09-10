const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

const users = [
    { id: 1, name: 'Taylor' },
    { id: 2, name: 'Summer'}
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log('User Service rodando em http://localhost:${PORT}');
});