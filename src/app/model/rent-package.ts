import { FileHandle } from "fs/promises";
import { RentFileHandle } from "./rentFile_handle";

export class RentPackage {
    rentPackageId?:number;
    rentName?:String;
    rentPrice?:String;
    rentLocation?:String;
    rentImages?:RentFileHandle[];
}
