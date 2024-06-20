import { Sqlite } from "./DataBases/Sqlite";

class DummyDB extends Sqlite {
  CreateTable(){
    this.ExecQuery('CREATE TABLE IF NOT EXISTS lorem (info TEXT)');
  }
}

const dummyDB = new DummyDB("Hello.db");
dummyDB.ExecQuery('INSERT INTO lorem VALUES (?)', ["1"]);
dummyDB.ExecQuery('SELECT * FROM lorem');