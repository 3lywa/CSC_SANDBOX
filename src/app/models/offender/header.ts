import { Name } from './name';
import { Language } from './language';
import { PhysicalCharacteristics } from './physicalcharacteristics';
import { Code } from '../codes';


export class Header {

    public _id: string;

    public names: Name;

    public fpsNumber: string;
    public birthDate: Date;
    public npfFileNumber: string;

    public languages: Language;
    public sex: Code;
    public maritalStatus: Code;
    public religion: Code;
    public physicalCharacteristics: PhysicalCharacteristics;

    constructor() {
        this.names = new Name();
        this.languages = new Language();
        this.sex = new Code();
        this.maritalStatus = new Code();
        this.religion = new Code();
        this.physicalCharacteristics = new PhysicalCharacteristics();
        this.fpsNumber = '';
    }
}

