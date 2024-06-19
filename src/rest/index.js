const { findOwner } = require('./routes/owner');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, API World!');
});

// Owner
app.get('/owners/new', findOwner);
app.post('/owners/new', findOwner);
app.get('/owners/find', findOwner);
app.get('/owners/:ownerId/edit', findOwner);
app.post('/owners/:ownerId/edit', findOwner);
app.get('/owners/:ownerId', findOwner);

// Pets
app.get('/owners/:ownerId/pets/new', findOwner);
app.post('/owners/:ownerId/pets/new', findOwner);
app.get('/owners/:ownerId/pets/:petId/edit', findOwner);
app.post('/owners/:ownerId/pets/:petId/edit', findOwner);

// Vet
app.get('/vets', findOwner);



const start = (port) => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = {
    start,
}