const { checkEmptyString } = require('../helpers');

class User {
    constructor(userId) {
        this._userId = checkEmptyString(userId, "userId is mandatory");
    }

    get userId() {
        return this._userId;
    }

    toJSON() {
        return {
            userId: this._userId
        }
    }

    static fromJSON(obj) {
        return new this(obj.userId);
    }
}

module.exports = User;
