import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="h-screen w-full">
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-3xl">Ups maybe you are in the wrong page</h2>
          <Link href="/" className="self-center underline underline-offset-2">
            Go back home
          </Link>
        </div>
      </div>
    </section>
  )
}
