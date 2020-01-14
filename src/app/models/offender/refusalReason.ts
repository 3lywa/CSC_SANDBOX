import { Code } from '../codes';

export class RefusalReason {
    public date: Date;
    public reasons: Code[];
    public other: string;
    public createdBy: string;

    constructor() {
        this.date = new Date();
        this.reasons = [];
    }
}
