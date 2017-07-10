export interface ISnSMessage {
    Message: any;
    MessageId: string;
    Type: string;
    SubscribeURL: string;
}

declare class MessageValidator {
    constructor(hostPattern?: string, encoding?: string);
    validate(hash: string, cb: (error: Error, message: ISnSMessage) => void): any;
}

export default MessageValidator;
