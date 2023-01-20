interface User {
  id: string;
  uid: string;
  firstName: string;
  lastName: string;
  mail: string;
  roles: string[];
  isInternalFlag: boolean;
  USPSFlag: boolean;
  SESGFlag: boolean;
  companyName: string;
  companyId: string;
  privileges: string[];
  custlist?: string[];
  customerType?: string;
  salesMultiAreaList?: string[];
}