import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import {IntegerType} from '../typecheck/IntegerType';
import {BooleanType} from '../typecheck/BooleanType';
/**
  Representación de las negaciones de expresiones booleanas.
*/
export class Negation implements Exp {

  exp: Exp;

  constructor(exp: Exp) {
    this.exp = exp;
  }

  toString(): string {
    return `Negation(${this.exp.toString()})`;
  }

  unparse(): string {
    return `(!${this.exp.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    var exp = this.exp.checktype(checkstate);
    if(!this.isCompatible(exp)){
      this.reportError(checkstate, exp);
    }
    return BooleanType.getInstance();

  }
  isCompatible(type: WhileType):boolean{
    var bool = BooleanType.getInstance();
    return type.coerce(bool);
  }
  reportError(chkState: CheckState,type1:WhileType){
    chkState.errors.push("Error al hacer !"+type1.toString());
  }
}
