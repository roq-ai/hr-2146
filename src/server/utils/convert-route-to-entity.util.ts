const mapping: Record<string, string> = {
  employees: 'employee',
  guests: 'guest',
  organizations: 'organization',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
