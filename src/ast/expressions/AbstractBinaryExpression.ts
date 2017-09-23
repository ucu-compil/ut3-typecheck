import { Exp } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';
import { IntegerType } from '../../typechecker/types/IntegerType';
import { NumericalType } from '../../typechecker/types/NumericalType';
import { BooleanType } from '../../typechecker/types/BooleanType';

export abstract class AbstractBinaryExpression implements Exp {


  protected leftHandExpression: Exp;
  protected rightHandExpression: Exp;
  protected operationSymbol: string

  protected constructor(leftHandExpression: Exp, rightHandExpression: Exp, operationSymbol: string) {
    this.leftHandExpression = leftHandExpression;
    this.rightHandExpression = rightHandExpression;
    this.operationSymbol = operationSymbol;
  }

  toString(): string {
    return `${this.constructor.name}(${this.leftHandExpression.toString()}, ${this.rightHandExpression.toString()})`;
  }

  unparse(): string {
    return `(${this.leftHandExpression.unparse()} ${this.operationSymbol} ${this.rightHandExpression.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    var leftSideType = this.leftHandExpression.checktype(checkstate);
    var rightSideType = this.rightHandExpression.checktype(checkstate);
    
    if (!this.isCoercible(leftSideType,rightSideType)) {
      this.reportError(checkstate, leftSideType, rightSideType);
    }
    return this.returnType(leftSideType, rightSideType);
  }

  reportError(chkState: CheckState, leftSideType: WhileType, rightSideType: WhileType) {
    chkState.errors.push("Error al operar " + leftSideType.toString() + ` ${this.operationSymbol} ` + rightSideType.toString());
  }

  protected isNumerical(type:WhileType):boolean{
    return type instanceof NumericalType;
  }

  protected isInteger(type:WhileType):boolean{
    return type instanceof IntegerType;
  }

  protected isBoolean(type:WhileType):boolean{
    return type instanceof BooleanType;
  }

  protected abstract returnType(leftSideType: WhileType, rightSideType: WhileType): WhileType;

  protected abstract isCoercible(leftSideType: WhileType, rightSideType: WhileType): boolean;
}
