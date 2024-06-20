import { Sqlite } from "./DataBases/Sqlite";

class DummyDB extends Sqlite {
  CreateTable(){
    this.ExecQuery('CREATE TABLE IF NOT EXISTS lorem (info TEXT)');
  }
}

const dummyDB = new DummyDB("Hello.db");