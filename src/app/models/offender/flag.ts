import { Need } from './need';
import { Alert } from './alert';
import { Description } from '../description';


export class Flag {
    public need: Need;
    public description: Description;
    public alert: Alert;

    constructor() {
        this.need = new Need;
        this.description = new Description;
        this.alert = new Alert;

    }
}
