import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';

export class Declaration implements Stmt {

  type: WhileType;
  id: string;

  constructor(type: WhileType, id: string) {
    this.type = type;
    this.id = id;
  }

  toString(): string {
    return `Declaration(${this.type} ${this.id})`;
  }

  unparse(): string {
    return `${this.type} ${this.id}}`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    checkstate.set(this.id,this.type);
    return checkstate;
  }
}
