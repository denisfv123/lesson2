const UserService = require('./service');
const Validation = require('./validation');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAll(req, res, next) {
    try {
        const users = await UserService.findAll();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findUser(req, res, next) {
    try {
        const { email } = req.body;

        Validation.validEmail({ email });
        const user = await UserService.findUser({ email });

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function createUser(req, res, next) {
    try {
        const { email, fullName } = req.body;
        
        Validation.validEmailAndName({ email, fullName });
        const isUser = await UserService.findUser({ email });

        if (isUser !== null) {
            throw "this user or email is already in use."
        }
        
        const user = await UserService.createUser({ email, fullName });

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function updateUser(req, res, next) {
    try {
        const { email, fullName } = req.body;

        Validation.validEmailAndName({ email, fullName });
        const user = await UserService.updateUser({ email, fullName });

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function deleteUser(req, res, next) {
    try {
        const { email } = req.body;

        Validation.validEmail({ email });
        const user = await UserService.deleteUser({ email });

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findAll,
    findUser,
    createUser,
    updateUser,
    deleteUser
}
