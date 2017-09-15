import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { NumericalType } from '../typecheck/NumericalType';
import { IntegerType } from '../typecheck/IntegerType';


/**
  Representación de restas.
*/
export class Substraction implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `Substraction(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} - ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    var lhs = this.lhs.checktype(checkstate);
    var rhs = this.rhs.checktype(checkstate);
    if(!this.isCompatible(lhs) || !this.isCompatible(rhs)){
      this.reportError(checkstate,lhs,rhs);
    }
    if(lhs instanceof NumericalType || rhs instanceof NumericalType){
      return NumericalType.getInstance();
    }
    return IntegerType.getInstance();
  }
  isCompatible(type: WhileType):boolean{
    var int = IntegerType.getInstance();
    var Num = NumericalType.getInstance();
    return type.coerce(int) || type.coerce(Num);
  }
  reportError(chkState: CheckState,type1:WhileType,type2:WhileType){
    chkState.errors.push("Error al hacer "+type1.toString() +" " + "- "+ type2.toString());
  }
}
