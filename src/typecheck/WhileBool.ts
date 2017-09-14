import { WhileType } from './WhileType';

export class WhileBool extends WhileType{

  type: String;
  instance: WhileType;

  constructor(){
    super();
    this.type = "bool";
  }

  getInstance(){
    if(this.instance == null){
      this.instance = WhileBool.constructor();
    }
    return this.instance;
  }
}
