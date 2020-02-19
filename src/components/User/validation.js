/**
 * @method onErrorEmail
 * @param {string}
 * @summary validation of variabl email
 * @returns throw error
 */
function onErrorEmail(email) {
    if (!email) {
        throw new Error('Email address is not defined');
    }

    const re = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
    if (!re.test(email)) {
        throw new Error('Incorrect email address');
    }
}

/**
 * @method onErrorName
 * @param {string}
 * @summary validation of variabl fullName
 * @returns throw error
 */
function onErrorName(fullName) {
    if (!fullName) {
        throw new Error('fullName address is not defined');
    }

    const re = /\w+\s+\w/;
    if (!re.test(fullName)) {
        throw new Error('Incorrect fullName');
    }
}

/**
 * @exports
 * @param {object} - email
 * @summary verification of entered data
 */
function validFindUser(userData) {
    const { email } = userData;

    onErrorEmail(email);
}

/**
 * @exports
 * @param {object} - email, fullName
 * @summary verification of entered data
 */
function validCreateUser(userData) {
    const { email, fullName } = userData;

    onErrorEmail(email);
    onErrorName(fullName);
}

/**
 * @exports
 * @param {object} - email, fullName
 * @summary verification of entered data
 */
function validUpdateUser(userData) {
    const { email, fullName } = userData;

    onErrorEmail(email);
    onErrorName(fullName);
}

/**
 * @exports
 * @param {object} - email
 * @summary verification of entered data
 */
function validDeleteUser(userData) {
    const { email } = userData;

    onErrorEmail(email);
}

module.exports = {
    validFindUser,
    validCreateUser,
    validUpdateUser,
    validDeleteUser
};
