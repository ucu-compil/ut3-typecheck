import { Exp } from '../ASTNode';
import { AbstractEqualityBooleanExpression } from './AbstractEqualityBooleanExpression';

export class CompareNotEqual extends  AbstractEqualityBooleanExpression {

  constructor(leftHandExpression: Exp, rightHandExpression: Exp) {
    super(leftHandExpression, rightHandExpression,"!=");
  }
}
