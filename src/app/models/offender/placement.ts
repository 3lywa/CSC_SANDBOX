
import { Code } from '../codes';
import { OffenderCBRF } from './offenderCBRF';


export class OffenderInfo {
    public fpsNumber: string;
    public firstName: string;
    public lastName: string;

    constructor() {
        this.fpsNumber = '';
        this.firstName = '';
        this.lastName = '';
    }
}

export class Placement {
    public _id: string;
    public id: number;

    public oid: string;
    public offenderInfo: OffenderInfo;
    public requestedBy: string;
    public requestedDate: Date;
    public purpose: Code;
    public details: string;
    public offenderCbrfs: OffenderCBRF[];
    public services: Code[];
    public interventions: Code[];
    public isOccupied: boolean;

    constructor() {
        this.purpose = new Code();
        this.offenderInfo = new OffenderInfo();
        this.offenderCbrfs = [];
        this.services = [];
        this.interventions = [];
    }
}
