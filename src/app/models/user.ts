import { Audit } from './audit';
import { Role } from './role';

export class User extends Audit {
    public id: number;

    public username: string;
    public firstName: string;
    public lastName: string;
    public fullName: string;

    public roles: Role[];
    public active: boolean;

    public email: string;
    public lastLogin: Date;

    public facilityCode: number;
}
