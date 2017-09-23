import { State } from '../interpreter/State';
import { CheckState } from '../typechecker/CheckState';
import { WhileType } from '../typechecker/types/WhileType';

export interface ASTNode {
  toString(): string;
  unparse(): string;
}

/**
  Categoría sintáctica de las expresiones de While, las
  construcciones del lenguaje que evalúan a un valor.
*/
export interface Exp extends ASTNode {

  evaluate(state: State): any;

  checktype(checkstate: CheckState): WhileType;

}

/**
  Categoría sintáctica de las sentencias (statements) de While, las
  construcciones del lenguaje que modifican (potencialmente) los
  valores de las variables en el estado del programa.
*/
export interface Stmt extends ASTNode {

  evaluate(state: State): State;

  checktype(checkstate: CheckState): CheckState;

}
