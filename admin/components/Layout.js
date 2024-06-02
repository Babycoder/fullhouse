import Nav from '@/components/Nav';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Layout({ children }) {
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
    <div className="bg-gray-300 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4 mb-2">
        {children}
        {/* <button className="bg-red-600" onClick={() => signOut()}>
          Sign out
        </button> */}
      </div>
    </div>
  );
}
