import { Description } from './description';

export class Codes {
    public _id: string;
    public code: string;
    public description: Description;
    public shortDescription: Description;
    public abbreviation: Description;
    public items: Code[];
    public tags: string[];

    constructor() {
        this.description = new Description();
        this.shortDescription = new Description();
        this.abbreviation = new Description();
        this.items = [];
        this.tags = [];
    }
}

export class Code {
    public code: string;
    public description: Description;
    public shortDescription: Description;
    public abbreviation: Description;

    public isSelected: boolean;
    public isDirty: boolean;

    constructor() {
        this.description = new Description();
        this.shortDescription = new Description();
        this.abbreviation = new Description();
    }
}
