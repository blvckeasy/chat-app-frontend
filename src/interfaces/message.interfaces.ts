export interface IMessage {
    _id: string,
    from_user_id: string,
    to_user_id: string,
    message: string,
    sended_time: Date,
    is_readable: boolean,
    __v: number,
}