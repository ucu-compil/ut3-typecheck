import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType} from '../typecheck/WhileType';
import {BooleanType} from '../typecheck/BooleanType';
import {IntegerType} from '../typecheck/IntegerType';

/**
  Representación de las comparaciones por igual.
*/
export class CompareEqual implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareEqual(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} == ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    var lhs = this.lhs.checktype(checkstate);
    var rhs = this.checktype(checkstate);
    if(!this.isCompatible(lhs) && this.isCompatible(lhs)){
      this.reportError(checkstate,lhs,rhs);
    }
    return BooleanType.getInstance();

  }
  isCompatible(type: WhileType):boolean{
    var int = IntegerType.getInstance();
    var bool = BooleanType.getInstance();
    return type.coerce(bool) || type.coerce(int);
  }
  reportError(chkState: CheckState,type1:WhileType,type2:WhileType){
    chkState.errors.push("Error al hacer "+type1.toString() +" " + "=="+ type2.toString());
  }
}
