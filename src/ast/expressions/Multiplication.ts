import { Exp } from '../ASTNode';
import {AbstractBinaryArimeticExpression} from './AbstractBinaryArimeticExpression'

/**
  Representación de multiplicaciones.
*/
export class Multiplication extends AbstractBinaryArimeticExpression {

  constructor(leftHandExpression: Exp, rightHandExpression: Exp){
    super(leftHandExpression,rightHandExpression,"*");
  }

}
