import BookItem from '@/components/book-item'
import { books } from '@/lib/data/books'

export default function BooksList () {
  return (
    <ul className='grid grid-cols-2 md:grid-cols-3 gap-3 px-4'>
        {
            books.map(({ id, title, img }) => (
                <li key={id}>
                    <BookItem id={id} title={title} img={img}/>
                </li>
            ))
        }
      </ul>
  )
}
