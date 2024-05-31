import Nav from '@/components/Nav';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-400 w-screen h-screen flex justify-center items-center">
        <div className="">
          <button
            onClick={() => signIn('google')}
            className="bg-white p-2 text-black rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-300 min-h-screen">
      <Nav />
      <div>
        Logged In {session.user.email}{' '}
        <button className="bg-red-600" onClick={() => signOut()}>
          Sign out
        </button>{' '}
      </div>
    </div>
  );
}
