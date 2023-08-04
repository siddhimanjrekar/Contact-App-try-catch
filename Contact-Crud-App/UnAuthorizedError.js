const BaseError = require("./BaseError")
class UnAuthorized extends BaseError{
    constructor(specificMessage){
        super("UnauthorisedError", "Unauthorised Access", 401)
        this.specificMessage = specificMessage
    }
}

module.exports = UnAuthorized