@preprocessor typescript

@{%

import {
  Addition,
  Assignment,
  CompareEqual,
  CompareNotEqual,
  CompareLessOrEqual,
  CompareLess,
  CompareGreatOrEqual,
  CompareGreat,
  Conjunction,
  Disjunction,
  IfThenElse,
  IfThen,
  Multiplication,
  Division,
  Negation,
  Sequence,
  Substraction,
  TruthValue,
  Variable,
  WhileDo,
  Integer,
  Double
} from '../ast/AST';

import {
  WhileInt,
  WhileBool,
  WhileDouble
} from '../typecheck/TYPECHECK'

import { tokens } from './Tokens';
import { MyLexer } from './Lexer';

const lexer = new MyLexer(tokens);

%}

@lexer lexer


# Statements

stmt ->
    stmtelse                              {% id %}
  | "if" exp "then" stmt                  {% ([, cond, , thenBody]) => (new IfThen(cond, thenBody)) %}

stmtelse ->
    type identifier "=" exp ";"           {% ([type, id, , exp, ]) => (new Assignment(type, id, exp)) %}
  | "{" stmt:* "}"                        {% ([, statements, ]) => (new Sequence(statements)) %}
  | "while" exp "do" stmt                 {% ([, cond, , body]) => (new WhileDo(cond, body)) %}
  | "if" exp "then" stmtelse "else" stmt  {% ([, cond, , thenBody, , elseBody]) => (new IfThenElse(cond, thenBody, elseBody)) %}


# Expressions

exp ->
    exp "&&" comp           {% ([lhs, , rhs]) => (new Conjunction(lhs, rhs)) %}
  | exp "||" comp           {% ([lhs, , rhs]) => (new Disjunction(lhs, rhs)) %}
  | comp                    {% id %}

comp ->
    comp "==" addsub        {% ([lhs, , rhs]) => (new CompareEqual(lhs, rhs)) %}
  | comp "!=" addsub        {% ([lhs, , rhs]) => (new CompareNotEqual(lhs, rhs)) %}
  | comp "<=" addsub        {% ([lhs, , rhs]) => (new CompareLessOrEqual(lhs, rhs)) %}
  | comp "<" addsub         {% ([lhs, , rhs]) => (new CompareLess(lhs, rhs)) %}
  | comp ">=" addsub        {% ([lhs, , rhs]) => (new CompareGreatOrEqual(lhs, rhs)) %}
  | comp ">" addsub         {% ([lhs, , rhs]) => (new CompareGreat(lhs, rhs)) %}
  | addsub

addsub ->
    addsub "+" muldiv       {% ([lhs, , rhs]) => (new Addition(lhs, rhs)) %}
  | addsub "-" muldiv       {% ([lhs, , rhs]) => (new Substraction(lhs, rhs)) %}
  | muldiv                  {% id %}

muldiv ->
    muldiv "*" neg          {% ([lhs, , rhs]) => (new Multiplication(lhs, rhs)) %}
  | muldiv "/" neg          {% ([lhs, , rhs]) => (new Division(lhs, rhs)) %}
  | neg                     {% id %}

neg ->
    "!" value               {% ([, exp]) => (new Negation(exp)) %}
  | value                   {% id %}

value ->
    "(" exp ")"             {% ([, exp, ]) => (exp) %}
  | integer                 {% ([num]) => (new Integer(num)) %}
  | double                  {% ([num]) => (new Double(num)) %}
  | "true"                  {% () => (new TruthValue(true)) %}
  | "false"                 {% () => (new TruthValue(false)) %}
  | identifier              {% ([id]) => (new Variable(id)) %}

type ->
    "int"                   {% () => (new WhileInt()) %}
  | "double"                {% () => (new WhileDouble()) %}
  | "bool"                  {% () => (new WhileBool()) %}

# Atoms

identifier ->
    %identifier             {% ([id]) => (id.value) %}

integer ->
    %integer                {% ([id]) => (id.value) %}
  | %hex                    {% ([id]) => (id.value) %}

float ->
    %float                  {% ([id]) => (id.value) %}
