import { Code } from '../codes';


export class Language {
    public preferredOfficialLanguage: Code;
    public homeLanguage: Code;
    public otherLanguage: string;

    constructor() {
        this.preferredOfficialLanguage = new Code();
    }
}
