const yup = require('yup');
const NamedEntity = require('../shared/namedEntity');
const Visit = require('./visit');
const GlobalConfig = require('../../config/global');

const petSchema = NamedEntity.schema.shape({
    birthDate: yup.date(),
    type: yup.string().oneOf(GlobalConfig.PET_TYPES),
    visits: yup.array().of(Visit.schema),
});

module.exports = {
    schema: petSchema,
};