import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WhileInt, WhileDouble, WhileBool } from '../typecheck/TYPECHECK';

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
    let clonedState: CheckState = Object.assign({},checkstate);
    if(!(this.cond.checktype(checkstate).toString() === new WhileBool().type)){
      checkstate.errorStack.push(`La expresion a evaluar dentro del if deberia ser del tipo ${new WhileBool().type}`);
    }
    this.thenBody.checktype(clonedState);
    checkstate.errorStack.concat(clonedState.errorStack);
    return checkstate;
  }
}
