import { Exp } from './ASTNode';
import {AbstractBinaryArimeticExpression} from './AbstractBinaryArimeticExpression'
/**
  Representación de Divisiones.
*/
export class Division extends AbstractBinaryArimeticExpression {

  constructor(leftHandExpression: Exp, rightHandExpression: Exp){
    super(leftHandExpression,rightHandExpression,"/");
  }

}
