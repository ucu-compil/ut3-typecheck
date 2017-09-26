import { WhileType } from './WhileType';

export class WhileInt extends WhileType{

  type: String;
  instance: WhileType;

  constructor(){
    super();
    if(this.instance == null){
      this.type = "int";
    }
  }
}
