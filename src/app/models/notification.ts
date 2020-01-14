import { Description } from './description';

export class Notification {
    public _id: string;

    public title: Object;
    public messages: Description [];
    public category: string;
    public triggeredBy: string;
    public triggereDate: Date;
    public groups: string[];

    constructor() {
        this.title = [];
        this.messages = [];
        this.groups = [];
    }
}
