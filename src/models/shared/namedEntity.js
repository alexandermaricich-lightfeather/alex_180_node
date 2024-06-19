const yup = require('yup');
const BaseEntity = require('./baseEntity');

const namedEntitySchema = BaseEntity.schema.shape({
    name: yup.string(),
})

module.exports = {
    schema: namedEntitySchema,
};