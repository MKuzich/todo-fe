export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  email: string;
  password: string;
  token: string;
  _id: string;
}

export interface IPasswords {
  email: string;
  oldPassword: string;
  newPassword: string;
}
