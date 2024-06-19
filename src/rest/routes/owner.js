const yup = require('yup');
const Owner = require('../../models/owner/owner');

const findOwner = async (req, res) => {
    // TODO: Get the owner from the database.
    const retrievedOwner = {
        id: 1,
        firstName: 'Dale',
        lastName: 'Cooper',
        telephone: '111-111-1111',
        city: 'San Diego',
        address: '1234 NotMy St.'
    };
    
    // Validate the data is in the correct format.
    try {
        await Owner.schema.validate(retrievedOwner);
    } catch (error) {
        console.log(error);
        res.send('Owner was not in correct format')
    }

    // Send owner details.
    console.log(retrievedOwner);
    res.send(retrievedOwner);
}

module.exports = {
    findOwner,
}