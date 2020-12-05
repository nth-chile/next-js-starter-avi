import cn from 'clsx'

function ButtonPrimary({
  onClick = console.log,
  className = '',
  children = null,
  type = null,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
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
    </button>
  )
}
export default ButtonPrimary
