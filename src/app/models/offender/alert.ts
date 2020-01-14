import { Description } from '../description';

export class Alert {
    public code: string;
    public description: Description;

    constructor() {
        this.description = new Description();
    }
}
