const yup = require('yup');
const Owner = require('../../models/owner/owner');
const Pet = require('../../models/owner/pet');

// Gets a list of all owners.
const getOwners = (req, res) => {
    // TODO: Get the list of vets from the database. this query should return a list of pets.
    const retrievedOwners = [{
        id: 1,
        firstName: 'Dale',
        lastName: 'Cooper',
        telephone: '111-111-1111',
        city: 'San Diego',
        address: '1234 NotMy St.',
        pets: []
    }];
    
    // Send owner details.
    console.log(retrievedOwners);
    res.send(retrievedOwners);
}

const createOwner = async (req, res) => {
    // Validate they sent us everything we need.
    try {
        // ID is not required here. Will be genereated by the database. 
        await Owner.schema.shape({
            id: yup.number(),
        }).validate(req.body);
        res.send(req.body);
        
    } catch (error) {
        // yup validation will take care of the response details.
       console.log(error);
       res.send(error);
    }
}

const updateOwner = async (req, res) => {
    // Validate they sent us everything we need.
    try {
        // ID is not required here. Will be genereated by the database. 
        await Owner.schema.validate(req.body);
        // TODO Write owner data to the database.
        res.send(req.body);
        
    } catch (error) {
        // yup validation will take care of the response details.
       console.log(error);
       res.send(error);
    }
}

const findOwner = (req, res) => {
    const ownerId = req.params.userId;
    // TODO: Get the owner from the database.
    const retrievedOwner = {
        id: 1,
        firstName: 'Dale',
        lastName: 'Cooper',
        telephone: '111-111-1111',
        city: 'San Diego',
        address: '1234 NotMy St.'
    };
    
    // Send owner details.
    console.log(retrievedOwner);
    res.send(retrievedOwner);
}

const createPet = async (req, res) => {
    // Validate they sent us everything we need.
    const ownerId = req.params.ownerId;
    const newPet = req.body;
    try {
        // ID is not required here. Will be genereated by the database. 
        await Pet.schema.shape({
            id: yup.number(),
        }).validate(req.body);
        // TODO: save the new pet to the db with the owner ID association.
        res.send(req.body);
        
    } catch (error) {
        // yup validation will take care of the response details.
       console.log(error);
       res.send(error);
    }
}

const updatePet = async (req, res) => {
    // Validate they sent us everything we need.
    try {
        // ID is not required here. Will be genereated by the database. 
        await Pet.schema.validate(req.body);
        // TODO Write pet data to the database.
        res.send(req.body);
        
    } catch (error) {
        // yup validation will take care of the response details.
       console.log(error);
       res.send(error);
    }
}

module.exports = {
    getOwners,
    updateOwner,
    createOwner,
    findOwner,
    createPet,
    updatePet,
}