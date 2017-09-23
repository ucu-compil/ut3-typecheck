import { Exp } from '../ASTNode';
import { State } from '../../interpreter/State';
import { CheckState } from '../../typechecker/CheckState';
import { WhileType } from '../../typechecker/types/WhileType';
import { IntegerType } from '../../typechecker/types/IntegerType';
import { BooleanType } from '../../typechecker/types/BooleanType';
/**
  Representación de las negaciones de expresiones booleanas.
*/
export abstract class AbstractExpression implements Exp {

    protected expression: Exp;

    constructor(expression: Exp) {
        this.expression = expression;
    }

    toString(): string {
        return `${this.constructor.name}(${this.expression.toString()})`;
    }

    abstract unparse(): string;

    evaluate(state: State): any {
        return undefined;
    }

    checktype(checkstate: CheckState): WhileType {
        var expressionType = this.expression.checktype(checkstate);
        if (!this.isCoercible(expressionType)) {
            this.reportError(checkstate, expressionType);
        }
        return this.returnType();
    }

    reportError(chkState: CheckState, WhileType: WhileType) {
        chkState.errors.push("Error al hacer !" + WhileType.toString());
    }

    public abstract isCoercible(type: WhileType): boolean;

    public abstract returnType(): WhileType;
}
