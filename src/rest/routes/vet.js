const Vet = require('../../models/vet/vet');

// Gets a list of all vets.
const getVets = async (req, res) => {
    // TODO: Get the list of vets from the database.
    const retrievedVets = [{
        id: 1,
        firstName: 'Dale',
        lastName: 'Cooper',
        telephone: '111-111-1111',
        city: 'San Diego',
        address: '1234 NotMy St.'
    }];
    
    // Send owner details.
    console.log(retrievedVets);
    res.send(retrievedVets);
}

module.exports = {
    getVets,
}