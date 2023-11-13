import Link from 'next/link'

interface Props {
  id: string
  title: string
  img: string
}
export default function BookItem ({ id, title, img }: Props) {
  return (
    <Link
        className='hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-4xl'
        href={`/books/${id}`}
    >
      <img
        className='aspect-[389-500] h-ful object-cover max-w-full rounded'
        src={img}
        alt="portada de libro clean code" />
    </Link>
  )
}
