export default interface IContact{
  id: number;
  sender: string;
  email: string;
  subject: string;
  typeSubject: enTypeSubject[];
  content: string;
  
  createDate?:Date;
  updateDate?:Date;
}

export enum enTypeSubject{
  feedback = 'feedback',
  question = 'question',
  support = 'support',
  other = 'other',
}