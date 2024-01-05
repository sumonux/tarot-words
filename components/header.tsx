import Link from 'next/link'

const Header = () => {
  return (
    <nav className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="text-black hover:text-black">
        Tarot Words
      </Link>
      .
    </nav>
  )
}

export default Header
