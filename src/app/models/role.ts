import { Audit } from './audit';

export class Role extends Audit {
    public id: number;

    public roleId: string;
    public appId: string;
    public roleType: string;
    public roleDescEn: string;
    public roleDescFr: string;

    public creationDate: Date;
}
