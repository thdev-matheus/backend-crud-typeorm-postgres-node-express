export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUserCreateResponse extends IUserCreate {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUserUpdate {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  age?: number;
}
