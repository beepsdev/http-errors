class HttpError extends Error {

    #code    = 500;
    #message = "Something went wrong.";
    #subcode = false;

    constructor(code, message, subcode){

        if(subcode){
            super(`${code}-${subcode} ${message}`);
        }else{
            super(`${code} ${message}`)
        }

        this.#code = Number(code);
        this.#message = JSON.stringify(message);
        this.#subcode = subcode;
    }

    toJSON(){
        return {
            code: this.#subcode ? `${this.#code}-${this.#subcode}` : `${this.#code}`,
            message: this.#message
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
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
    MethodNotAllowed,
    Conflict,
    SessionAlreadyStarted,
    NotImplemented

}