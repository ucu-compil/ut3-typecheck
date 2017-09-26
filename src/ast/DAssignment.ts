import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { Integer, Double, TruthValue } from './AST';

/**
  Representación de las asignaciones de valores a variables.
*/
export class DAssignment implements Stmt {

  type: WhileType;
  id: string;
  exp: Exp;

  constructor(type: WhileType, id: string, exp: Exp) {
    this.type = type;
    this.id = id;
    this.exp = exp;
  }

  toString(): string {
    return `Assignment(${this.type} ${this.id}, ${this.exp.toString()})`;
  }

  unparse(): string {
    return `${this.type} ${this.id} = ${this.exp.unparse()}`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    if(this.type.type === "int" && this.exp instanceof Integer ||
      this.type.type === "double" && this.exp instanceof Double ||
      this.type.type === "bool" && this.exp instanceof TruthValue){
        checkstate.set(this.id,this.type);
      }
    return checkstate;
  }
}
