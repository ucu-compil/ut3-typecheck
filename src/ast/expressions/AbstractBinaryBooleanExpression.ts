import { Exp } from '../ASTNode';
import { WhileType } from '../../typechecker/types/WhileType';
import { AbstractEqualityBooleanExpression } from './AbstractEqualityBooleanExpression'

export abstract class AbstractBinaryComparation extends AbstractEqualityBooleanExpression {

  protected isCoercible(leftSideType: WhileType, rightSideType: WhileType): boolean {
    return this.getBooleanCoercibilityBothSides(leftSideType,rightSideType);
  }
}
