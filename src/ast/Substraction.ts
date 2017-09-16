import { Exp } from './ASTNode';
import {AbstractBinaryArimeticExpression} from './AbstractBinaryArimeticExpression'

/**
  Representación de restas.
*/

export class Substraction extends AbstractBinaryArimeticExpression {

  constructor(leftHandExpression: Exp, rightHandExpression: Exp){
    super(leftHandExpression,rightHandExpression,"-");
  }

}
