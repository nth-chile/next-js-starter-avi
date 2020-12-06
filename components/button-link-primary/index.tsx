import Link from 'next/link'
import cn from 'clsx'

function ButtonLinkPrimary({ href = '/', className = '', children }) {
  return (
    <Link href={href}>
      <a
        className={cn(
            'whitespace-nowrap',
            'inline-flex',
            'items-center',
            'justify-center',
            'px-4',
            'py-2',
            'border',
            'border-transparent',
            'rounded-md',
            'shadow-sm',
            'text-base',
            'font-medium',
            'text-white',
            'bg-indigo-600',
            'hover:bg-indigo-700',
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

export default ButtonLinkPrimary
