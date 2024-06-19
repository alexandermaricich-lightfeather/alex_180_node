const yup = require('yup');
const BaseEntity = require('../shared/baseEntity');

const visitSchema = BaseEntity.schema.shape({
    date: yup.date(),
    description: yup.string().required(),
});

module.exports = {
    schema: visitSchema,
};