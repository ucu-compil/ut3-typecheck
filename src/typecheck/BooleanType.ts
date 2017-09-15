import { WhileType } from "./WhileType";

export class BooleanType extends WhileType {

    private static instance: BooleanType = null;

    private constructor() {
        super();
    }

    public static getInstance(): BooleanType {
        if (BooleanType.instance == null) {
            BooleanType.instance = new BooleanType();
        }
        return BooleanType.instance;
    }

    public coerce(targetType: WhileType): boolean {
        return this.isBoolean(targetType);
    }

    protected isBoolean(type:WhileType):boolean{
        return type instanceof BooleanType;
    }

}