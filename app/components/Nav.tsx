import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '~/lib/theme'

const Nav = () => {
  const { isDarkMode } = useTheme()

  return (
    <nav className="w-full border-b bg-scale-300 p-4">
      <Link href="https://aitools.network">
        {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a className="flex">
          <Image
            src={
              isDarkMode
                ? '/images/aitoolslogo.png'
                : '/images/aitoolslogo.png'
            }
            alt="AI Tools Network Logo"
            height={48}
            width={50}
          />
        </a>
      </Link>
    </nav>
  )
}

export default Nav
