export interface UserData {
  email:string
  id:string
}

export class UserProfile {
  email: string;
  id:string

  constructor({ email,id}: UserData) {
    this.email = email;
    this.id=id
  }
}
