const Joi = require('@hapi/joi');

const schemEmail = Joi.object({
    email: Joi.string().email().required()
});

const schemEmailAndName = Joi.object({
    email: Joi.string().email().required(),
    fullName: Joi.string().trim().required()
});

/**
 * @exports
 * @param {object} - email
 * @summary verification of entered data
 */
function validEmail(dataUser) {
    const { error } = schemEmail.validate(dataUser);
    if (error) throw error;
}

/**
 * @exports
 * @param {object} - email, fullName
 * @summary verification of entered data
 */
function validEmailAndName(dataUser) {
    const { error } = schemEmailAndName.validate(dataUser);
    if (error) throw error;
}

module.exports = {
    validEmail,
    validEmailAndName
};
