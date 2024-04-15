export interface PropsLogin {
  email: string;
  password: string;
}

export interface PropsDataLogin {
  dataUser: PropsLogin[];
  dataLogin: PropsLogin;
}

export type LoginContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};
