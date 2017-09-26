import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WhileInt, WhileDouble, WhileBool } from '../typecheck/TYPECHECK';

/**
  Representación de las iteraciones while-do.
*/
export class WhileDo implements Stmt {
  cond: Exp;
  body: Stmt;

  constructor(cond: Exp, body: Stmt) {
    this.cond = cond;
    this.body = body;
  }

  toString(): string {
    return `WhileDo(${this.cond.toString()}, ${this.body.toString()})`;
  }

  unparse(): string {
    return `while ${this.cond.unparse()} do { ${this.body.unparse()} }`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    if(!(this.cond.checktype(checkstate).toString() === new WhileBool().type)){
      checkstate.errorStack.push(`La expresion a evaluar dentro del while deberia ser del tipo ${new WhileBool().type}`);
    }
    return checkstate;
  }
}
