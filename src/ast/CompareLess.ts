import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WhileInt, WhileDouble, WhileBool } from '../typecheck/TYPECHECK';

/**
  Representación de las comparaciones por menor o igual.
*/
export class CompareLess implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareLess(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} < ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    return this.coerce(this.lhs.checktype(checkstate),
                       this.rhs.checktype(checkstate));
  }

  coerce(lhs:WhileType, rhs:WhileType): WhileType{
    if(lhs instanceof WhileInt){
      if(rhs instanceof WhileDouble) { return new WhileBool();}
      if(rhs instanceof WhileInt) { return new WhileBool(); }
    }
    if(rhs instanceof WhileInt){
      if(lhs instanceof WhileDouble) { return new WhileBool();}
      if(lhs instanceof WhileInt) { return new WhileBool(); }
    }
    return undefined;
  }
}
