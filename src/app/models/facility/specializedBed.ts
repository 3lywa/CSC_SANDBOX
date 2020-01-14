import { Description } from '../description';

export class SpecializedBed {
    public isSelected: boolean;
    public description: Description;
    public code: string;
    public perDiem: number;
    public numberOfSpecializedBeds: number;

    constructor() {
        this.description = new Description();
    }
}
