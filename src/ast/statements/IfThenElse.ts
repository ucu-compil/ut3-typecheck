import { Exp, Stmt } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';
import {BooleanType } from '../../typechecker/types/BooleanType';
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
    if (!this.cond.checktype(checkstate).coerce(BooleanType.getInstance())){
      checkstate.errors.push("Error de tipos en la condicion del if es de tipo "+this.cond.checktype(checkstate).toString());
    }
    var stateThen:CheckState = checkstate.clone();
    var stateElse:CheckState = checkstate.clone();
    stateThen  = this.thenBody.checktype(stateThen);
    stateElse  = this.elseBody.checktype(stateElse);
    stateThen.vars.forEach((value, identifier) => {
      if(!(stateElse.get(identifier) === value))
        stateThen.vars.delete(identifier);
    });
    stateThen.errors = checkstate.errors.concat(stateThen.errors).concat(stateElse.errors);
    return stateThen;
  }
}
