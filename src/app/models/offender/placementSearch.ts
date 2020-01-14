import { Code } from '../codes';
import { Facility } from '../facility';

export class PlacementSearch {
    public firstName: string;
    public surname: string;
    public fpsNumber: string;
    public district: Code;
    public paroleOffice: Facility;
    public cbrf: string;
    public cbrfType: Code;
    public releaseTypes: string[];
    public reservationStatuses: string[];
    public dateRange: any[];

    constructor() {
        this.fpsNumber = '';
        this.firstName = '';
        this.surname = '';
        this.cbrf = '';
        this.cbrfType = new Code();
        this.district = new Code();
        this.paroleOffice = new Facility();
        this.releaseTypes = [];
        this.reservationStatuses = [];
        this.dateRange = [];
    }
}
