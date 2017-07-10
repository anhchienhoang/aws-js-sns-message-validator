class MessageValidator {
    constructor(hostPattern?: string, encoding?: string);

    validate(hash: string, cb: (error:Error, message: Object) => void);
}
export = MessageValidator;
