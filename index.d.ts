export interface ISnSMessage {
    Message: any;
    MessageId: string;
    Type: string;
    SubscribeURL: string;
}

class MessageValidator {
    constructor(hostPattern?: string, encoding?: string);
    validate(hash: string, cb: (error: Error, message: ISnSMessage) => void);
}

export default MessageValidator;
