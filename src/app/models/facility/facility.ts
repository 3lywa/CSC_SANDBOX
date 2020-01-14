import { Header } from './header';
import { Community } from './community';
import { Status } from './status';
import { Pagination } from '../pagination';
import { Code } from '../codes';

export class Facility {
    public _id: string;

    public code: string;
    public header: Header;
    public community: Community;
    public status: Status;

    constructor() {
        this.header = new Header();
        this.community = new Community();
        this.status = new Status();
    }
}
