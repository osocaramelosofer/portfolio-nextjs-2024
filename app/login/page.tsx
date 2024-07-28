import { signIn } from '@/lib/actions';
import { BsGoogle } from 'react-icons/bs';
export default function LoginPage() {
  return (
    <main className="w-full h-full bg-stone-800">
      <section className="flex h-full p-5">
        <div className="center-container w-full flex flex-col items-center justify-center gap-y-2">
          <div className="info-container">
            <p className="text-white">
              sorry but you must be login before continue with the page
            </p>
          </div>
          <div className="form-container mx-auto max-w-max">
            <form action={signIn} className="form-login">
              <button
                className="flex gap-x-2 items-center backdrop-blur-md bg-white/30
                    rounded-full px-4 py-1"
              >
                <span className="font-bold text-white">sign in with</span>
                <BsGoogle className="text-red-500" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
