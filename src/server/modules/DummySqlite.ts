import { Sqlite } from "./DataBases/Sqlite";

class DummyClass extends Sqlite {
  CreateTable(){
    this.ExecQuery('CREATE TABLE IF NOT EXISTS lorem (info TEXT)');
  }
}

const dummyDB = new DummyClass("Hello.db");