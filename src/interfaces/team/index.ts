import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  team_lead_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  team_lead_id?: string;
  organization_id?: string;
}
