import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { IntegerType } from '../typecheck/IntegerType';
import { NumericalType } from '../typecheck/NumericalType';
import { AbstractBinaryExpression } from './AbstractBinaryExpression'


export abstract class AbstractBinaryArimeticExpression extends AbstractBinaryExpression {

  constructor(leftHandExpression: Exp, rightHandExpression: Exp,operationSymbol:string){
    super(leftHandExpression,rightHandExpression,operationSymbol);
  }

  protected returnType(leftSideType: WhileType, rightSideType: WhileType): WhileType {
    return (this.isNumerical(leftSideType) || this.isNumerical(rightSideType)
      ? NumericalType
      : IntegerType)
      .getInstance();
  }
  protected getCoercibleTypes(type: WhileType): boolean {
    var integerType = IntegerType.getInstance();
    var numericalType = NumericalType.getInstance();
    return type.coerce(integerType) || type.coerce(numericalType);
  }

}
