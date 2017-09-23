import { Exp } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';
import { IntegerType } from '../../typechecker/types/IntegerType';

export abstract class AbstractValue <T> implements Exp {

  value: T;

  constructor(value: T) {
    this.value = value;
  }

  toString(): string {
    return `${this.constructor.name}(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  public abstract checktype(checkstate: CheckState): WhileType ;
}
