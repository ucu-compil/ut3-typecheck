import { WhileType } from "./WhileType";

export class IntegerType extends WhileType {

    private static instance: IntegerType = null;

    private constructor() {
        super();
    }

    public static getInstance(): IntegerType {
        if (IntegerType.instance == null) {
            IntegerType.instance = new IntegerType();
        }
        return IntegerType.instance;
    }

    public coerce(targetType: WhileType): boolean {
        return this.isInteger(targetType) || this.isNumerical(targetType);
    }
}