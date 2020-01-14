import { PhysicalLocation } from './physicallocation';
import { CscManageLocation } from './cscmanagelocation';
import { NpbManageLocation } from './npbmanagelocation';
import { BedLocation } from './bedlocation';

export class Location {
    public physicalLocation: PhysicalLocation;
    public cscManageLocation: CscManageLocation;
    public npmManageLocation: NpbManageLocation;
    public bedLocation: BedLocation;
}
