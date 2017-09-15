import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WhileBool } from '../typecheck/TYPECHECK';
/**
  Representación de conjunciones booleanas (AND).
*/
export class Conjunction implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `Conjunction(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} && ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    return this.coerce(this.lhs.checktype(checkstate),
                       this.rhs.checktype(checkstate));
  }

  coerce(lhs:WhileType, rhs:WhileType): WhileType {
    if(lhs instanceof WhileBool && rhs instanceof WhileBool){
      return new WhileBool();
    }
    return undefined;
  }
}
