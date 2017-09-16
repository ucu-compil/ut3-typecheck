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
  type: WhileType;

  constructor(value: number, type: WhileType) {
    this.value = value;
    this.type = type;
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
    return this.type;
  }
}
