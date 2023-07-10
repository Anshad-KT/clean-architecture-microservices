export interface UserData {
  email:string
  password:string
}

export class UserProfile {
  email: string;
  password:string

  constructor({ email,password}: UserData) {
    this.email = email;
    this.password=password
  }
}
