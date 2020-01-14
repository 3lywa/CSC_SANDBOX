import { StandardBed } from './standardBed';
import { SpecializedBed } from './specializedBed';
import { OfflineBed } from './offlineBed';

export class Contract {
    public id: number;
    public effectiveDate: Date;
    public expiryDate: Date;
    public offlineBeds: OfflineBed[];
    public contractDetails: ContractDetails;
    public versions: ContractDetails[];
    public occupiedBeds: number;

    constructor() {
        this.contractDetails = new ContractDetails();
        this.versions = [];
        this.offlineBeds = [];
    }
}

export class ContractDetails {
    public startDate: Date;
    public endDate: Date;

    public contractedCapacity: number;
    public uncontractedCapacity: number;
    public occupiedBeds: number;
    public numberOfBeds: number;
    public numberOfAccessibleBeds: number;
    public perDiem: number;

    public isGraduated: boolean;
    public isPending: boolean;

    public standardBeds: StandardBed[];
    public specializedBeds: SpecializedBed[];

    constructor() {
        this.specializedBeds = [];
        this.contractedCapacity = 0;
        this.uncontractedCapacity = 0;
        this.perDiem = 0;
        this.numberOfBeds = 0;
        this.numberOfAccessibleBeds = 0;
        this.isGraduated = false;
        this.isPending = false;
        this.standardBeds = [];
        this.specializedBeds = [];
    }
}
