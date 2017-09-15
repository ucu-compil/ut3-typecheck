import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WhileInt, WhileDouble } from '../typecheck/TYPECHECK';
/**
  Representación de multiplicaciones.
*/
export class Division implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `Division(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} / ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    return this.coerce(this.lhs.checktype(checkstate),
                       this.rhs.checktype(checkstate));
  }

  coerce(lhs:WhileType, rhs:WhileType){
    if(lhs instanceof WhileInt){
      if(rhs instanceof WhileInt){ return new WhileInt(); }
      if(rhs instanceof WhileDouble){ return new WhileDouble(); }
    }
    if(rhs instanceof WhileInt){
      if(lhs instanceof WhileInt){ return new WhileInt(); }
      if(lhs instanceof WhileDouble){ return new WhileDouble(); }
    }
    return undefined;
  }
}
