import { Facility } from './facility';

export class PhysicalLocation {
    public code: string;
    public facility: Facility;

    constructor() {
        this.facility = new Facility();
    }
}
