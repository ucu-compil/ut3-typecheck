import { WhileType } from './WhileType';

export class WhileDouble extends WhileType{

  type: String;
  instance: WhileType;

  constructor(){
    super();
    this.type = "double";
  }

  getInstance(){
    if(this.instance == null){
      this.instance = WhileDouble.constructor();
    }
    return this.instance;
  }
}
