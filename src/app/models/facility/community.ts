import { Code } from '../codes';
import { Contract } from './contract';


export class Community {
    public services: Code[];
    public interventions: Code[];
    public exclusions: Code[];
    public currentContract: Contract;
    public contractHistory: Contract[];
    public pendingContracts: Contract[];

    constructor() {
        this.services = [];
        this.interventions = [];
        this.exclusions = [];
        this.currentContract = new Contract();
        this.contractHistory = [];
        this.pendingContracts = [];
    }
}
