import { Code } from '../codes';
import { Description } from '../description';

export class Status {
    public _id: string;
    public code: string;
    public description: Description;
    public shortDescription: Description;
    public abbreviation: Description;
    public current: Code;

    constructor() {
        this.description = new Description();
        this.shortDescription = new Description();
        this.abbreviation = new Description();
        this.current = new Code();
    }
}
