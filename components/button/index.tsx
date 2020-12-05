import cn from 'clsx'

function Button({
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
    </button>
  )
}
export default Button
