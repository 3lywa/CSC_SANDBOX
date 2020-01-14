import { Code } from '../codes';

export class FacilitySearch {
    public name: string;
    public code: string;
    public cbrfType: Code;
    public status: Code;
    public region: Code;
    public clientele: Code;
    public province: Code;
    public paroleOffice: Code;
    public district: Code;

    constructor() {
        this.name = '';
        this.code = '';
        this.region = new Code();
        this.status = new Code();
        this.cbrfType = new Code();
        this.clientele = new Code();
        this.province = new Code();
        this.district = new Code();
        this.paroleOffice = new Code();
    }
}
