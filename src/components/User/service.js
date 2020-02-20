const UserModel = require('./model');

module.exports = {
    /**
     * @exports
     * @method findAll
     * @param {}
     * @summary get list of all users
     * @returns Promise<UserModel[]>
     */
    async findAll() {
        return await UserModel.find({});
    },


    /**
     * @exports
     * @method findUser
     * @param {object} - email
     * @summary find one user
     * @returns Promise<UserModel[]>
     */
    async findUser(dataUser) {
        return await UserModel.findOne(dataUser, (err) => {
            if(err) console.error(`Error: ${err.message}`);
        });
    },
  
    /**
     * @exports
     * @method createUser
     * @param {object} - email, fullName
     * @summary create new user
     * @returns Promise<UserModel[]>
     */
    async createUser(dataUser) {
        const user = UserModel(dataUser);
        return await user.save();
    },

    /**
     * @exports
     * @method updateUser
     * @param {object} - email, fullName
     * @summary update user
     * @returns Promise<UserModel[]>
     */
    async updateUser(dataUser) {
        const { email, fullName } = dataUser;

        return UserModel.findOneAndUpdate({ email: email }, { fullName: fullName }, { new: true }, (err) => {
            if(err) console.error(`Error: ${err.message}`);
        });
    },

    /**
     * @exports
     * @method deleteUser
     * @param {object} - email
     * @summary delete user
     * @returns Promise<UserModel[]>
     */
    async deleteUser(dataUser) {
        return UserModel.deleteOne(dataUser, (err) => {
            if(err) console.error(`Error: ${err.message}`);
        });
    } 
    
};
