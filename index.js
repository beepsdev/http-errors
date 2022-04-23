class HttpError extends Error {

    #code    = 500;
    #message = "Something went wrong.";
    #subcode = false;

    constructor(code, message, subcode){

        super(message);

        this.#code = Number(code);
        this.#message = JSON.stringify(message);
        this.#subcode = subcode;
    }

    get code(){
        return `${this.#code}`;
    }

    get message(){
        return this.#message;
    }

    get subcode(){
        return this.#subcode;
    }

    get fullcode(){
        return this.subcode ? `${this.code}-${this.subcode}` : `${this.code}`
    }

    toJSON(){
        return {
            code: this.fullcode,
            message: this.message
        }
    }

}

class BadRequest extends HttpError {
    constructor(subcode = false, message = "Bad Request") {
        super(400, message, subcode);
    }
}

class Unauthorized extends HttpError {
    constructor(subcode = false, message = "Unauthorized") {
        super(401, message, subcode);
    }
}

class SessionInvalid extends HttpError {
    constructor(subcode = false, message = "Provided session is invalid") {
        super(401, message, 1);
    }
}

class SessionExpired extends HttpError {
    constructor(subcode = false, message = "Provided session has expired") {
        super(401, message, 2);
    }
}

class PaymentRequired extends HttpError {
    constructor(subcode = false, message = "Payment Required") {
        super(402, message, subcode);
    }
}

class Forbidden extends HttpError {
    constructor(subcode = false, message = "Forbidden") {
        super(402, message, subcode);
    }
}

class InvalidPassword extends HttpError {
    constructor(subcode = false, message = "Invalid Password") {
        super(402, message, 2);
    }
}

class InvalidUsername extends HttpError {
    constructor(subcode = false, message = "Invalid Username") {
        super(402, message, 3);
    }
}

class Invalid2factor extends HttpError {
    constructor(subcode = false, message = "Invalid 2FA Code") {
        super(402, message, 4);
    }
}

class InvalidAccountDetails extends HttpError {
    constructor(subcode = false, message = "Invalid Account Details") {
        super(402, message, 1);
    }
}

class NotFound extends HttpError {
    constructor(subcode = false, message = "Not Found") {
        super(404, message, subcode);
    }
}

class MethodNotAllowed extends HttpError {
    constructor(subcode = false, message = "Method not allowed") {
        super(405, message, subcode);
    }
}

class Conflict extends HttpError {
    constructor(subcode = false, message = "Conflict") {
        super(409, message, subcode);
    }
}

class SessionAlreadyStarted extends HttpError {
    constructor(message = "Cannot start session because one has already been started.") {
        super(409, message, 1);
    }
}

class NotImplemented extends HttpError {
    constructor(subcode = false, message = "Not Implemented") {
        super(501, message, subcode);
    }
}

module.exports = {

    HttpError,

    BadRequest,
    Unauthorized,
    SessionInvalid,
    SessionExpired,
    PaymentRequired,
    Forbidden,
    NotFound,
    MethodNotAllowed,
    Conflict,
    SessionAlreadyStarted,
    NotImplemented,

    InvalidAccountDetails,
    InvalidPassword,
    InvalidUsername,
    Invalid2factor

}