import { Exp, Stmt } from './ASTNode';
import { Numeral } from './AST';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';

/**
  Representación de las asignaciones de valores a variables.
*/


///poner la variable en la lista de varaibles definidas

export class Assignment implements Stmt {

  id: string;
  exp: Exp;

  constructor(id: string, exp: Exp) {
    this.id = id;
    this.exp = exp;
  }

  toString(): string {
    return `Assignment(${this.id}, ${this.exp.toString()})`;
  }

  unparse(): string {
    return `${this.id} = ${this.exp.unparse()}`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    if (!this.isDefined(checkstate)){
      checkstate.errors.push("Falta definir variable " + this.id);
    }
    else{
      var type = checkstate.vars.get(this.id);
      var expType =this.exp.checktype(checkstate);
      if (!expType.coerce(type))
        checkstate.errors.push("Error de tipos: [" + type + "] distinto [" + expType + "]" );
    }
    return checkstate;
  }

  isDefined(checkstate: CheckState): Boolean {
    if (checkstate.vars.get(this.id) == undefined){
      return false;
    }
    return true;
  }
}
