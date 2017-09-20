import { Exp } from '../ASTNode';
import { State } from '../../interpreter/State';
import { WhileType } from '../../typechecker/types/WhileType';
import { CheckState } from '../../typechecker/CheckState';
import { UndefinedType } from '../../typechecker/types/UndefinedType';

/**
  Representación de usos de variable en expresiones.
*/
export class Variable implements Exp {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  toString(): string {
    return `Variable(${this.id})`;
  }

  unparse(): string {
    return this.id;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    var type = checkstate.get(this.id);
    if(type != undefined){
      if(! (checkstate.assignedVars.indexOf(this.id) > -1)){
        checkstate.errors.push("Variable '" + this.id + "' no inicializada");
        return UndefinedType.getInstance();
      }
      return type;
    }else{
      checkstate.errors.push("Variable " + this.id +" no declarada");
      return UndefinedType.getInstance();
    }
  }
}
