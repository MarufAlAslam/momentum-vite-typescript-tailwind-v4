import type { HTMLAttributes } from 'react'

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

const Link = ({ href, children, className = '', ...props }: LinkProps) => {
  return (
    <a
      href={href}
      className={`text-[14px] font-normal hover:text-gray-900 transition-colors ${className}`}
      style={{ color: '#020617' }}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
