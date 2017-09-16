import { Exp } from './ASTNode';
import {AbstractBinaryArimeticExpression} from './AbstractBinaryArimeticExpression'

export class Addition extends AbstractBinaryArimeticExpression {
  
  constructor(leftHandExpression: Exp, rightHandExpression: Exp){
    super(leftHandExpression,rightHandExpression,"+");
  }

}
