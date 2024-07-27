import { signIn } from '@/lib/actions';
import { BsGoogle } from 'react-icons/bs';
export default function LoginPage() {
  return (
    <main className="w-full h-full bg-stone-800">
      <section className="flex h-full p-5">
        <form action={signIn} className="form-login m-auto max-w-max max-y-max">
          <button
            className="flex gap-x-2 items-center backdrop-blur-md bg-white/30
                    rounded-full px-4 py-1"
          >
            <span className="font-bold text-white">sign in with</span>
            <BsGoogle className="text-red-500" />
          </button>
        </form>
      </section>
    </main>
  );
}
