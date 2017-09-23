import { Exp } from '../ASTNode';                     
import { AbstractBinaryComparation } from './AbstractBinaryComparation';

/**
  Representación de conjunciones booleanas (AND).
*/
export class Disjunction extends AbstractBinaryComparation {
      constructor(leftHandExpression: Exp, rightHandExpression: Exp) {
      super(leftHandExpression, rightHandExpression, "||");
    }
  }
  