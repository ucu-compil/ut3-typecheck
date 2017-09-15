import { WhileType } from './WhileType';

export class WhileBool extends WhileType{

  type: String;
  instance: WhileType;

  constructor(){
    super();
    if(this.instance == null){
    this.type = "bool";
    }
  }
}
