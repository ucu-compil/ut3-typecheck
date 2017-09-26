export abstract class WhileType {
  constructor(){}

  type: String;
  instance: WhileType;

  coerce():Boolean{ return false; }
}
