const yup = require('yup');
const Person = require('../person');
const Specialty = require('./specialty');

const vetSchema = Person.schema.shape({
    specialty: yup.array().of(Specialty.schema),
})

module.exports = {
    schema: vetSchema,
};