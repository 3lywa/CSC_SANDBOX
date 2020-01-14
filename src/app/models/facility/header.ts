import { Address } from './address';
import { Contact } from './contact';
import { Description } from '../description';
import { Code } from '../codes';


export class Header {
    public name: Name;
    public nameAbb: Code;
    public address: Address;
    public contact: Contact;
    public type: Code;
    public clientele: Code;

    constructor() {
        this.name = new Name();
        this.nameAbb = new Code();
        this.address = new Address();
        this.contact = new Contact();
        this.type = new Code();
        this.clientele = new Code();
    }
}

export class Name {
    public description: { en: string, fr: string };
    public abbreviation: { en: string, fr: string };

    constructor() {
        this.description = {en: '', fr: ''};
        this.abbreviation =  {en: '', fr: ''};
    }
}
