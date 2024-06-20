import Database from "better-sqlite3";
import { IDataBase } from "./Interfaces/IDatabase";

export abstract class Sqlite implements IDataBase{

  /** 해당 프로퍼티로 직접 접근하면 X */
  __db 

  constructor(path : string){
    this.__db = new Database(path, {verbose : console.log})
    this.Init();
  }

  ExecQuery(query: string, params?: unknown[]){

    if(params === undefined){
      this.__db.exec(query);
      return;
    }

    const exec = this.__db.prepare(query);
    const result = exec.run(params);
    return result;
  }

  Init(){
    this.CreateTable();
  }

  abstract CreateTable() : void
}