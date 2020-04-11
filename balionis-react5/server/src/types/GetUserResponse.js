const { checkEmptyObject } = require('../helpers');
const Message = require('./Message');
const MessageType = require('./MessageType');

class GetUserResponse extends Message {
    constructor(uuid, user) {
        super(MessageType.GetUserResponse, uuid);
        this._user = checkEmptyObject(user, "user is mandatory");
    }

    get user() {
        return this._user;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            user: this.user
        }
    }

    static fromJSON(obj) {
        return new this(obj.type, obj.uuid, obj.user);
    }
}

module.exports = GetUserResponse;
