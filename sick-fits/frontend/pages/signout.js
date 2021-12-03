import SignOut from '../components/SignOut';
import PleaseSignIn from '../components/PleaseSignIn';

export default function SignOutPage() {
  return (
    <div>
      <PleaseSignIn>
        <SignOut />
      </PleaseSignIn>
    </div>
  );
}
