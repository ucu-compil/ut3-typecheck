import { Exp } from '../ASTNode';
import { AbstractBinaryComparation } from './AbstractBinaryBooleanExpression';

/**
  Representación de conjunciones booleanas (AND).
*/
export class Conjunction extends AbstractBinaryComparation {

    constructor(leftHandExpression: Exp, rightHandExpression: Exp) {
    super(leftHandExpression, rightHandExpression, "&&");
  }
}
