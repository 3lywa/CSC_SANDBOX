import { Header } from './header';
import { Status } from './status';
import { Sentence } from './sentence';
import { Flag } from './flag';
import { Location } from './location';
import { Code } from '../codes';
import { Placement } from './placement';

export class Offender {
    public _id: string;
    public oid: string;
    public header: Header;
    public status: Status;
    public sentence: Sentence;
    public jurisdiction: Code;
    public flag: Flag;
    public releaseType: Code;
    public location: Location;
    public region: Code;
    public images: OffenderImage[];

    constructor() {
        this.header = new Header();
        this.status = new Status();
        this.sentence = new Sentence();
        this.jurisdiction = new Code();
        this.flag = new Flag();
        this.releaseType = new Code();
        this.location = new Location();
        this.region = new Code();
        this.images = [];
    }
}

export class OffenderImage {
    imageBase64: string;
    saveDate: string;

    constructor() {
    }
}
