// At it's simplest, access control returns a yes or a no value depending on the users session

import { ListAccessArgs } from './types';
import { permissionsList } from './schemas/fields';

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// permissions check if someone meets a criteria - yes or no.
export const Permissions = {
  ...generatedPermissions,
  // we can also add additional permissions not in UI
  isAwesome({ session }: ListAccessArgs) {
    return session?.data.name?.includes('brandon');
  },
};

// Rule based function
