import * as readlineSync from "readline-sync";

import { Parser } from "nearley";

import { tokens } from "./lexer/Tokens";
import { MyLexer } from "./lexer/Lexer"
import { ParserRules, ParserStart } from "./parser/Grammar";

import { ASTNode, Stmt } from './ast/AST';

import { State } from './interpreter/State';
import { CheckState } from './typechecker/CheckState';
import { WhileType } from './typechecker/types/WhileType';


console.log("While :: REPL");

var state = new CheckState();

while (true) {
  const lexer = new MyLexer(tokens);
  const parser = new Parser(ParserRules, ParserStart, { lexer });

  const input = readlineSync.question('> ');

  try {
    // Parse user input
    parser.feed(input);
    // Print result
    const nodes: Stmt[] = parser.results;

    switch (nodes.length) {
      case 0: {
        console.log("Parse failed!!");
        break;
      }
      case 1: {
        const node = nodes[0];
        state = node.checktype(state);
        console.log(`\n${state.toString()}`);
        for(var i =0;i<state.errors.length;i++){
          console.log(state.errors[i]);
        }
        state.errors = [];
        break;
      }
      default: {
        console.log("Warning!! Grammar is ambiguous, multiple parse results.\n");
        nodes.map((node) => console.log(node.toString()));
        break;
      }
    }

  } catch(parseError) {
    console.log(parseError);
  }
}
