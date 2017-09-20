import { Exp } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';
import { IntegerType } from '../../typechecker/types/IntegerType';
import { NumericalType } from '../../typechecker/types/NumericalType';
import { AbstractBinaryExpression } from './AbstractBinaryExpression'


export class AbstractBinaryArimeticExpression extends AbstractBinaryExpression {

  protected integerType: WhileType;
  protected numericalType: WhileType;

  constructor(leftHandExpression: Exp, rightHandExpression: Exp, operationSymbol: string) {
    super(leftHandExpression, rightHandExpression, operationSymbol);
    this.integerType = IntegerType.getInstance();
    this.numericalType = NumericalType.getInstance();
  }
  
  private getArimeticCoercibility(type: WhileType): boolean {
    return type.coerce(this.integerType) || type.coerce(this.numericalType);
  }

  protected returnType(leftSideType: WhileType, rightSideType: WhileType): WhileType {
    return this.isNumerical(leftSideType) || this.isNumerical(rightSideType)
      ? this.numericalType
      : this.integerType;
  }

  protected isCoercible(leftSideType: WhileType, rightSideType: WhileType): boolean {
    return this.getArimeticCoercibilityBothSides(leftSideType, rightSideType);
  }

  protected getArimeticCoercibilityBothSides(leftSideType: WhileType, rightSideType: WhileType) {
    return this.getArimeticCoercibility(leftSideType) && this.getArimeticCoercibility(rightSideType);
  }
}
