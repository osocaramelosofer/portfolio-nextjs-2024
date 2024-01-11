export default function Container ({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto  max-w-[800px] px-12'>
        { children }
    </div>
  )
}
