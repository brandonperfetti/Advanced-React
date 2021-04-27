// At it's simplest, access control returns a yes or a no value depending on the users session

import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}
