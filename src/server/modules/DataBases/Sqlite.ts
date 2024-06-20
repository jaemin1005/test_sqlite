import Database from "better-sqlite3";
import { IDataBase } from "./Interfaces/IDatabase";

export abstract class Sqlite implements IDataBase{

  /** 해당 프로퍼티로 직접 접근하면 X */
  __db 

  constructor(path : string){
    this.__db = new Database(path, {verbose : console.log})
    this.Init();
  }

  ExecQuery<T>(query: string, params?: unknown[]) : T[] | null | Database.RunResult{
    const exec = this.__db.prepare(query);
    const upperQuery = query.toUpperCase();

    if(upperQuery.startsWith("SELECT")){
      const result = params === undefined ? exec.all() : exec.all(params);
      return result as T[]
    }

    else if(upperQuery.startsWith("UPDATE") || upperQuery.startsWith("DELETE") || upperQuery.startsWith("INSERT") || upperQuery.startsWith("CREATE")){
      const result = params === undefined ? exec.run() : exec.run(params);
      return result
    }

    else{
      return null;
    }
  }

  Init(){
    this.CreateTable();
  }

  abstract CreateTable() : void
}