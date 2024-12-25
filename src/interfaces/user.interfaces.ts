export interface IUser {
    _id: string;
    fullname: string;
    profile_img_path?: string | null,
    socket_id?: string | null;
    username: string;
}