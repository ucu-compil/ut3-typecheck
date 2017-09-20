import { Exp } from '../ASTNode';
import { AbstractBinaryComparation } from './AbstractBinaryComparation'

export class CompareGreatOrEqual extends AbstractBinaryComparation {

  constructor(leftHandExpression: Exp, rightHandExpression: Exp) {
    super(leftHandExpression, rightHandExpression, ">=");
  }
}