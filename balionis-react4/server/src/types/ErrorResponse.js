const { checkEmptyString } = require('../helpers');
const Message = require('./Message');
const MessageType = require('./MessageType');

class ErrorResponse extends Message {
    constructor(uuid, errorCode, reason, args) {
        super(MessageType.ErrorResponse, uuid);
        this._errorCode = checkEmptyString(errorCode, "errorCode is mandatory");
        this._reason = reason || '';
        this._args = args || [];
    }

    get errorCode() {
        return this._errorCode;
    }

    get reason() {
        return this._reason;
    }

    get args() {
        return this._args;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            errorCode: this.errorCode,
            reason: this.reason,
            args: this.args,
        }
    }

    static fromJSON(obj) {
        return new this(obj.uuid, obj.code, obj.message, obj.args);
    }
}

module.exports = ErrorResponse;
