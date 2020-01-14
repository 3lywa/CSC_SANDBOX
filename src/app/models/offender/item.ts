import { Code } from '../codes';

export class Item {
    public type: Code;

    constructor() {
        this.type = new Code();
    }
}
