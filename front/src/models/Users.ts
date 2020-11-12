export interface UserCreation{
  name: string;
  lastName: string;
  licenseNumber: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface UserLogin{
  email: string;
  userName: string;
  phoneNumber: string;
  password: string;
}
