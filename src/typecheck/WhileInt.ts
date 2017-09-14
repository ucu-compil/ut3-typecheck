import { WhileType } from './WhileType';

export class WhileInt extends WhileType{

  type: String;
  instance: WhileType;

  constructor(){
    super();
    this.type = "int";
  }

  getInstance(){
    if(this.instance == null){
      this.instance = WhileInt.constructor();
    }
    return this.instance;
  }
}
