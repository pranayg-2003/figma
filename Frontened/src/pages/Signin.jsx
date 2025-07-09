// pages/Signin.jsx
import { SignIn } from '@clerk/clerk-react';

export default function SignInPage() {
  return <SignIn path="/signIn" routing="path" />;
}
