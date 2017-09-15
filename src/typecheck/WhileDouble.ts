import { WhileType } from './WhileType';

export class WhileDouble extends WhileType{

  type: String;
  instance: WhileType;

  constructor(){
    super();
    if(this.instance == null){
      this.type = "double";
    }
  }
}
