export interface IContact {
  id?: number;
  sender?: string;
  email?: string;
  subject: string;
  typeSubject?: enTypeSubject;
  content: string;
}

export enum enTypeSubject {
  'feedback' = 1,
  'question' = 2,
  'support' = 3,
  'other' = 4,
}