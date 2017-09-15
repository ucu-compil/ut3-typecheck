import { IntegerType } from "./IntegerType";
import { BooleanType } from "./BooleanType";
import { NumericalType } from "./NumericalType";

export abstract class WhileType {


    public toString():string{
        return `${this.constructor.name}`;
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

    public isSameType(type:WhileType):boolean{
       return type === this;
    }

    public abstract coerce(targetType:WhileType):boolean;
 }
