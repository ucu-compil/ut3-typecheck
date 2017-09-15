import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import {IntegerType} from '../typecheck/IntegerType';
import {BooleanType} from '../typecheck/BooleanType';
/**

/**
  Representación de las comparaciones por menor o igual.
*/
export class CompareGreatOrEqual implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareGreatOrEqual(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} >= ${this.rhs.unparse()})`;
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
    return BooleanType.getInstance();

  }
  isCompatible(type: WhileType):boolean{
    var int = IntegerType.getInstance();
    return type.coerce(int);
  }
  reportError(chkState: CheckState,type1:WhileType,type2:WhileType){
    chkState.errors.push("Error al hacer "+type1.toString() +" " + ">="+ type2.toString())
  }
}
