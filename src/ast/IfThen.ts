import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import {BooleanType } from '../typecheck/BooleanType';

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
