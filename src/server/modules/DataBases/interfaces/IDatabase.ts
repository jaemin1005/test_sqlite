export interface IDataBase{
  __db : any;
  ExecQuery : (query : string, params? : any) => void
  CreateTable : () => void
}