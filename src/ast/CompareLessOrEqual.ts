import { Exp } from './ASTNode';
import { AbstractBinaryComparation } from './AbstractBinaryComparation'

export class CompareLessOrEqual extends AbstractBinaryComparation {

  constructor(leftHandExpression: Exp, rightHandExpression: Exp) {
    super(leftHandExpression, rightHandExpression, "<=");
  }
}