
export abstract class WhileType {

    public toString():string{
        return `${this.constructor.name}`;
    }

    public isSameType(type:WhileType):boolean{
       return type === this;
    }

    public abstract coerce(targetType:WhileType):boolean;
 }
