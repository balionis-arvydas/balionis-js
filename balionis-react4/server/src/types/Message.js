const { checkEmptyString } = require('../helpers');

class Message {

    constructor(type, uuid) {
        this._type = checkEmptyString(type, "type is mandatory");
        this._uuid = checkEmptyString(uuid, "uuid is mandatory");
    }

    get type() {
        return this._type;
    }

    get uuid() {
        return this._uuid;
    }

    toJSON() {
        return {
            type: this.type,
            uuid: this.uuid,
        }
    }

    static fromJSON(obj) {
        return new this(obj.message, obj.uuid);
    }
}

module.exports = Message;
