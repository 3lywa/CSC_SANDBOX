import { Description } from '../description';
import { Item } from './item';


export class Facility {
    public code: string;
    public description: Description;
    public item: Item;

    constructor() {
        this.description = new Description();
        this.item = new Item();
    }
}
