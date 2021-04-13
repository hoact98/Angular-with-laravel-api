export class User {
    id: Number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    constructor(id: Number, name: string,email: string,password:string,avatar:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }
}
