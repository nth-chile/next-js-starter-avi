import Link from 'next/link'
import cn from 'clsx'

function ButtonLink({ href = '/', className = '', children }) {
  return (
    <Link href={href}>
      <a
        className={cn(
          'bg-blue',
          'text-gray-500',
          'hover:text-gray-900',
          'p-2',
          'rounded',
          'uppercase',
          'text-sm',
          'font-medium',
         {
            [className]: Boolean(className),
          }
        )}
      >
        {children}
      </a>
    </Link>
  )
}

export default ButtonLink
