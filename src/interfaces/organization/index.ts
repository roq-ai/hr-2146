import { EmployeeInterface } from 'interfaces/employee';
import { GuestInterface } from 'interfaces/guest';
import { TeamInterface } from 'interfaces/team';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  employee?: EmployeeInterface[];
  guest?: GuestInterface[];
  team?: TeamInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
    guest?: number;
    team?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
