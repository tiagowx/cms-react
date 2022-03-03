export default interface IUser{
  id?: number;
  fullName: string;
  email: string;
  password?: string;
  roles: enRoles[];

  createDate?:Date;
  updateDate?:Date;
}

export enum enRoles{
  sysAdmin = 'sysAdmin',
  admin = 'admin',
  commom = 'common',
}