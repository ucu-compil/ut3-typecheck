import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { BooleanType } from '../typecheck/BooleanType';

/**
  Representación de valores de verdad (cierto o falso).
*/
export class TruthValue implements Exp {

  value: Boolean;

  constructor(value: Boolean) {
    this.value = value;
  }

  toString(): string {
    return `TruthValue(${this.value})`;
  }

  unparse(): string {
    return this.value ? "true" : "false";
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    return BooleanType.getInstance();
  }
}
