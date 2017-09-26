import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WhileInt, WhileDouble, WhileBool } from '../typecheck/TYPECHECK';

/**
  Representación de las sentencias condicionales.
*/
export class IfThenElse implements Stmt {
  cond: Exp;
  thenBody: Stmt;
  elseBody: Stmt;

  constructor(cond: Exp, thenBody: Stmt, elseBody: Stmt) {
    this.cond = cond;
    this.thenBody = thenBody;
    this.elseBody = elseBody;
  }

  toString(): string {
    return `IfThenElse(${this.cond.toString()}, ${this.thenBody.toString()}, ${this.elseBody.toString()})`;
  }

  unparse(): string {
    return `if ${this.cond.unparse()} then { ${this.thenBody.unparse()} } else { ${this.elseBody.unparse()} }`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    if(this.cond.checktype(checkstate).toString() === new WhileBool().type){
      checkstate.errorStack.push(`La expresion a evaluar dentro del if deberia ser del tipo ${new WhileBool().type}`);
    }
    Object.assign({},checkstate)
    let [stateThen,stateElse] = [this.thenBody.checktype(Object.assign({},checkstate)),this.elseBody.checktype(Object.assign({},checkstate))]
    let retState: CheckState = new CheckState();
    retState.vars = Object.assign({}, stateThen.vars, stateElse.vars);
    retState.errorStack = [].concat.apply([], [checkstate.errorStack,stateThen.errorStack,stateElse.errorStack]);
    return retState;
  }
}
