const yup = require('yup');

const baseEntitySchema = yup.object({
    id: yup.number().required(),
})

module.exports = {
    schema: baseEntitySchema,
};