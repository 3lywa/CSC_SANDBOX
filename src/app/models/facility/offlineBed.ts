export class OfflineBed {
    public id: number;
    public numberOfBeds: number;
    public reason: string;
    public startDate: Date;
    public endDate: Date;
    public bfDate: Date;
    public isAccessible: boolean;
    public isActive: boolean;

    constructor() {
        this.isActive = true;
    }
}
