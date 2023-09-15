export interface IRegister {
    name: string;
    email: string;
    password: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    password: string,
    photo?: string
}
