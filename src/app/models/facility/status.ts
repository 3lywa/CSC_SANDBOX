import { Code } from '../codes';

export class Status {
    public current: Code;
    public section81: Code;

    constructor() {
        this.current = new Code();
        this.section81 = new Code();
    }
}
