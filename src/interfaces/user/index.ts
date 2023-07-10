import { GuestInterface } from 'interfaces/guest';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  guest: GuestInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
