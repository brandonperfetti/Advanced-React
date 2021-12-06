import { useUser } from './User';
import SignIn from './SignIn';

export default function RequireSignIn({ children }) {
  const me = useUser();
  if (!me) return null;
  return children;
}
