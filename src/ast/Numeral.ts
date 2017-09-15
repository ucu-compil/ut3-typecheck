import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { IntegerType } from '../typecheck/IntegerType';
import { NumericalType } from '../typecheck/NumericalType';

/**
  Representación de constantes numéricas o numerales.
*/
export class Numeral implements Exp {

  value: number;

  constructor(value: number) {
    this.value = value;
  }

//  toString(): string {
  //  return `Numeral(${this.value})`;
  //}

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    if(this.isInteger()){
      return IntegerType.getInstance();
    }else{
      return NumericalType.getInstance();
    }
  }
  isInteger(): boolean{
     return this.value % 1 == 0;
  }
}
