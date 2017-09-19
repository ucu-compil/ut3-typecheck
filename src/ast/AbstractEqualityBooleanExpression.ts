import { Exp } from './ASTNode';
import { WhileType } from '../typecheck/WhileType';
import { AbstractBinaryArimeticExpression } from './AbstractBinaryArimeticExpression'
import { BooleanType } from '../typecheck/BooleanType';

/**
 * Abstraccion creada para la comparacion por '==' y '!='
 */
export abstract class AbstractEqualityBooleanExpression extends AbstractBinaryArimeticExpression {


  constructor(leftHandExpression: Exp, rightHandExpression: Exp, operationSymbol: string) {
    super(leftHandExpression, rightHandExpression, operationSymbol);
  }

  private getBooleanCoercibility(type: WhileType): boolean {
    return type.coerce(BooleanType.getInstance());
  }

  protected getBooleanCoercibilityBothSides(leftSideType: WhileType, rightSideType: WhileType): boolean {
    return this.getBooleanCoercibility(leftSideType) && this.getBooleanCoercibility(rightSideType);
  }

  protected isCoercible(leftSideType: WhileType, rightSideType: WhileType): boolean {
    return super.isCoercible(leftSideType, rightSideType) || this.getBooleanCoercibilityBothSides(leftSideType, rightSideType);
  }

  protected returnType(leftSideType: WhileType, rightSideType: WhileType): WhileType {
    return BooleanType.getInstance();
  }

}
