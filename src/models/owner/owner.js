const yup = require('yup');
const Person = require('../shared/person');
const Pet = require('./pet');

const ownerSchema = Person.schema.shape({
    address: yup.string().required(),
    city: yup.string().required(),
    telephone: yup.string().required(),
    pets: yup.array().of(Pet.schema),
});

module.exports = {
    schema: ownerSchema,
};