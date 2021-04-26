export class User {
    id: Number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    role: Number;
    constructor(id: Number, name: string,email: string,password:string,avatar:string,role:Number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.role=role;
    }
}
