import { Exp } from './ASTNode';
import { AbstractBinaryComparation } from './AbstractBinaryComparation'

export class CompareLess extends AbstractBinaryComparation {

  constructor(leftHandExpression: Exp, rightHandExpression: Exp) {
    super(leftHandExpression, rightHandExpression, "<");
  }
}