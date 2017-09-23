import { AbstractValue } from './AbstractValue';
import { Exp } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';
import { NumericalType } from '../../typechecker/types/NumericalType';

export class Numeral extends AbstractValue <number>  {
  
  checktype(checkstate: CheckState): WhileType {
    return NumericalType.getInstance();
  }
}
