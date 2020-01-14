import { Code } from '../codes';
import { Facility } from '../facility';

export class OffenderSearch {
    public firstName: string;
    public surname: string;
    public fpsNumber: string;
    public region: Code;
    public dob: Date;
    public facility: Facility;

    constructor() {
        this.firstName = '';
        this.surname = '';
        this.fpsNumber = '';
        this.region = new Code();
        this.facility = new Facility();
    }
}

export class OffenderMatch {
    public clientele: Code;
    public interventions: string[];
    public services: string[];
    public district: Code;
    public paroleOffice: Code;
    public cbrf: string;
    public cbrfCode: string;
    public cbrfType: Code;

    constructor() {
        this.cbrf = '';
        this.cbrfCode = '';
        this.clientele = new Code();
        this.district = new Code();
        this.paroleOffice = new Code();
        this.cbrfType = new Code();
        this.interventions = [];
        this.services = [];
    }
}
