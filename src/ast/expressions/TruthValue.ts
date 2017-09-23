import { AbstractValue } from './AbstractValue';
import { Exp } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';
import { BooleanType } from '../../typechecker/types/BooleanType';

/**
  Representación de valores de verdad (cierto o falso).
*/
export class TruthValue extends AbstractValue <boolean> {

  unparse(): string {
    return this.value ? "true" : "false";
  }

  checktype(checkstate: CheckState): WhileType {
    return BooleanType.getInstance();
  }
}
