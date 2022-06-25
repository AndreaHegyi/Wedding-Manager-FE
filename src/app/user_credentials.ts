import { VendorData } from "./vendordata";

export interface UserCredentials {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    location: string;
    vendorData: VendorData;
    appUserRole: string;
  }
  