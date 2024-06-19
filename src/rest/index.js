const { findOwner, createOwner, getOwners, updateOwner, createPet, updatePet } = require('./routes/owner');
const { getVets } = require('./routes/vet');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, API World!');
});

// Owner
app.get('/owners', getOwners);
app.post('/owners/new', createOwner);
app.get('/owners/:ownerId', findOwner);
app.post('/owners/:ownerId/edit', updateOwner);

// Pets
app.post('/owners/:ownerId/pets/new', createPet);
app.post('/owners/:ownerId/pets/:petId/edit', updatePet);

// Vet
app.get('/vets', getVets);



const start = (port) => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = {
    start,
}