import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';

/**
  Representación de las asignaciones de valores a variables.
*/
export class DeclarationAssignment implements Stmt {

  id: string;
  exp: Exp;
  type:WhileType;

  constructor(type:WhileType, id: string, exp: Exp) {
    this.id = id;
    this.exp = exp;
    this.type = type;
  }

  toString(): string {
    return `DeclarationAssignment(${this.id}, ${this.exp.toString()})`;
  }

  unparse(): string {
    return `${this.type.toString()} ${this.id} = ${this.exp.unparse()}`;
  }

  evaluate(state: State): State {
    return undefined;
  }
  checktype(checkstate: CheckState): CheckState {
    var expType = this.exp.checktype(checkstate);
    checkstate.vars.set(this.id, this.type);
    if (this.isDefined(checkstate)){
      checkstate.errors.push("La variable " + this.id + "ya está definida.");
    }
    if (! expType.isSameType(this.type)){
      checkstate.errors.push("Error de tipos: [" + this.type + "] distinto [" + expType.toString() + "]" );
    }
    return checkstate;
  }
  isDefined(checkstate: CheckState): Boolean {
    if (checkstate.vars.get(this.id) != undefined)
      return false;
    return true;
  }
}
