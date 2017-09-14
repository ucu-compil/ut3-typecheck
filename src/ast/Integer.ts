import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';

/**
  Representación de constantes numéricas o numerales.
*/
export class Integer implements Exp {

  value: number;

  constructor(value: number) {
    this.value = value;
  }

  toString(): string {
    return `Integer(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    return undefined;
  }
}
