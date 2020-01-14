import { Description } from '../description';
import { Code } from '../codes';

export class Address {
    public street1: Description;
    public street2: Description;
    public street3: Description;
    public city: string;
    public postalZipCode: string;
    public provinceState: Code;
    public region: Code;
    public district: Code;
    public paroleOffice: Code;
    public timeZone: Code;
    public isDST: boolean;
    public latitude: number;
    public longitude: number;

    constructor() {
        this.street1 = new Description();
        this.street2 = new Description();
        this.street3 = new Description();
        this.provinceState = new Code();
        this.region = new Code();
        this.district = new Code();
        this.paroleOffice = new Code();
        this.timeZone = new Code();
        this.isDST = false;
    }
}

