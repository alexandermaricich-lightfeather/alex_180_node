const yup = require('yup');
const NamedEntity = require('./namedEntity');

const personSchema = NamedEntity.schema.shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
})

module.exports = {
    schema: personSchema,
};