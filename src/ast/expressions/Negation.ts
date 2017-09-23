import { AbstractExpression } from './AbstractExpression';
import { Exp } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';
import {IntegerType} from '../../typechecker/types/IntegerType';
import {BooleanType} from '../../typechecker/types/BooleanType';
/**
  Representación de las negaciones de expresiones booleanas.
*/

export class Negation extends AbstractExpression {
  
  unparse(): string {
    return `(!${this.expression.unparse()})`;
  }
  public isCoercible(type: WhileType): boolean {
    return type.coerce( BooleanType.getInstance());
  }
  public returnType(): WhileType {
    return  BooleanType.getInstance();
  }
}
 
