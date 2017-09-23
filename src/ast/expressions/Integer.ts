import { AbstractValue } from './AbstractValue';
import { Exp } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';
import { IntegerType } from '../../typechecker/types/IntegerType';

export class Integer extends AbstractValue<number> {

  checktype(checkstate: CheckState): WhileType {
    return IntegerType.getInstance();
  }
}
