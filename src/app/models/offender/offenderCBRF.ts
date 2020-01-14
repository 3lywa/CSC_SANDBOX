import { Facility, Status } from '../facility';
import { Code } from '../codes';
import { Note } from '../note';
import { RefusalReason } from './refusalReason';
import { Description } from '../description';

export class OffenderCBRF {
    public _id: string;
    public id: number;

    public facility: Facility;
    public notes: Note[];
    public releaseType: Code;
    public currentStatus: Code;
    public statusHistory: StatusHistory[];
    public refusal: RefusalReason;
    public anticipatedStartDate: Date;
    public expectedStartDate: Date;
    public actualStartDate: Date;
    public expectedEndDate: Date;
    public actualEndDate: Date;
    public specializedBedSelected: boolean;
    public selectedSpecializedBed: SpecializedBed;
    public specializedBedHistory: SpecializedBed[];
    public toDelete: boolean;
    public isActive: boolean;

    constructor() {
        this.facility = new Facility();
        this.notes = [];
        this.refusal = new RefusalReason();
        this.currentStatus = new Code();
        this.statusHistory = [];
        this.releaseType = new Code();
        this.selectedSpecializedBed = new SpecializedBed();
        this.specializedBedHistory = [];
        this.id = 0;
        this.toDelete = false;
        this.isActive = true;
    }
}

export class StatusHistory {
    public status: Code;
    public actionDate: Date;

    constructor() {
        this.status = new Code();
    }
}

export class SpecializedBed {
    public isSelected: boolean;
    public description: Description;
    public code: string;
    public startDate: Date;
    public endDate: Date;

    constructor() {
        this.description = new Description();
    }
}

