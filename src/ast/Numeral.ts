import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';

/**
  Representación de constantes numéricas o numerales.
*/
export class Numeral implements Exp {

  value: WhileType;

  constructor(value: WhileType) {
    this.value = value;
  }

  toString(): string {
    return `Numeral(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    return this.value;
  }
}
