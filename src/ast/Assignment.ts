import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';

/**
  Representación de las asignaciones de valores a variables.
*/
export class Assignment implements Stmt {

  id: string;
  exp: Exp;

  constructor(id: string, exp: Exp) {
    this.id = id;
    this.exp = exp;
  }

  toString(): string {
    return `Assignment(${this.id}, ${this.exp.toString()})`;
  }

  unparse(): string {
    return `${this.id} = ${this.exp.unparse()}`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    if (! this.isDefined(checkstate)){
      checkstate.errors.push("Falta definir variable " + this.id);
    }
    else{
      var type = checkstate.vars.get(this.id);
      if (! type.isSameType(this.exp.checktype(checkstate)))
        checkstate.errors.push("Error de tipos: [" + type + "] distinto [" + this.exp.checktype(checkstate) + "]" );
      }
    return checkstate;
  }

  isDefined(checkstate: CheckState): Boolean {
    if (checkstate.vars.get(this.id) != undefined)
      return false;
    return true;
  }
}
