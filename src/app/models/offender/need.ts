import { Description } from '../description';

export class Need {
    public code: string;
    public description: Description;

    constructor() {
        this.description = new Description();
    }
}
