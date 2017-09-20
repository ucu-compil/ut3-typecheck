import { Exp, Stmt } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';

/**
  Representación de las asignaciones de valores a variables.
*/
export class Declaration implements Stmt {

  id: string;
  type:WhileType;

  constructor(type:WhileType, id: string) {
    this.id = id;
    this.type = type;
  }

  toString(): string {
    return `Declaration(${this.type.toString()}, ${this.id})`;
  }

  unparse(): string {
    return `${this.type.toString()} ${this.id};`;
  }

  evaluate(state: State): State {
    return undefined;
  }
  checktype(checkstate: CheckState): CheckState {
    if (!this.isDefined(checkstate)){
      checkstate.errors.push("La variable " + this.id + "ya está definida.");
    }else{
      checkstate.vars.set(this.id, this.type);
    }
    return checkstate;
  }

  isDefined(checkstate: CheckState): Boolean {
    if (checkstate.vars.get(this.id) != undefined)
      return false;
    return true;
  }
}
