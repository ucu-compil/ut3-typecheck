import { Exp, Stmt } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';
import {BooleanType } from '../../typechecker/types/BooleanType';

/**
  Representación de las sentencias condicionales.
*/
export class IfThen implements Stmt {
  cond: Exp;
  thenBody: Stmt;

  constructor(cond: Exp, thenBody: Stmt) {
    this.cond = cond;
    this.thenBody = thenBody;
  }

  toString(): string {
    return `IfThen(${this.cond.toString()}, ${this.thenBody.toString()})`;
  }

  unparse(): string {
    return `if ${this.cond.unparse()} then { ${this.thenBody.unparse()} }`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    if (!this.cond.checktype(checkstate).coerce(BooleanType.getInstance())){
      checkstate.errors.push("Error de tipos en la condicion del if, tipo "+this.cond.checktype(checkstate).toString());
    }
    var nState = checkstate.clone();
    this.thenBody.checktype(nState);
    checkstate.errors.concat(nState.errors);
    return checkstate;
  }
}
