import { Exp } from '../ASTNode';
import {AbstractBinaryArimeticExpression} from './AbstractBinaryArimeticExpression'

export class Substraction extends AbstractBinaryArimeticExpression {

  constructor(leftHandExpression: Exp, rightHandExpression: Exp){
    super(leftHandExpression,rightHandExpression,"-");
  }

}
