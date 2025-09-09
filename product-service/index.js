const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3002;

app.use(express.json());

const products = [
    { id: 1, name: 'Notebook', userId: 1},
    { id: 2, name: 'Mouse', userId: 2}
];

app.get('/products', async (req, res) => {
    try{
        // Buscar usuários no User Service
        const { data: users } = await axios.get('http://localhost:3001/users');

        // Juntar os dados de usuários com os produtos
        const productWithUser = products.map(prod => ({
            ...prod,
            user: users.find(u => u.id === prod.userId)
        }));

        res.json(productWithUser);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

app.listen(PORT, () => {
    console.log('Product Service rodando em http://localhost:${PORT}');
});
