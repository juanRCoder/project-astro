import Counter from './Counter'

export default function Navbar() {
  return (
    <>
      <nav className='flex bg-stone-800 items-center py-2 px-4'>
        <div className='flex-1 flex gap-4'>
          <a href='/' className='hover:text-orange-500'>Home</a>
          <a href='/launcher' className='hover:text-orange-500'>Launcher</a>
          <a href='/posts' className='hover:text-orange-500'>posts</a>
        </div>
        <Counter />
      </nav>
    </>
  )
}
