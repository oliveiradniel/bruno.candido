import type { ComponentProps } from 'react'

const base =
  "relative isolate inline-flex items-center overflow-hidden rounded-full font-bold transition-[transform,box-shadow,background-color,border-color] duration-350 ease-soft before:absolute before:top-0 before:-left-[60%] before:-z-10 before:h-full before:w-[40%] before:-skew-x-20 before:bg-[linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent)] before:transition-[left] before:duration-700 before:ease-soft before:content-[''] hover:-translate-y-[3px] hover:before:left-[130%] active:-translate-y-px active:scale-[.97] active:duration-100 [&_svg]:transition-transform [&_svg]:duration-350 [&_svg]:ease-soft hover:[&_svg]:scale-[1.12] hover:[&_svg]:-rotate-12"

const variants = {
  accent: 'bg-accent text-ink hover:shadow-[0_14px_30px_-12px_rgba(240,106,31,.6)]',
  dark: 'bg-ink text-cream hover:shadow-[0_14px_30px_-12px_rgba(240,106,31,.6)]',
  paper: 'bg-paper-ink text-cream hover:shadow-[0_14px_30px_-12px_rgba(240,106,31,.6)]',
  outline: 'border border-cream/35 hover:border-cream/70 hover:bg-cream/8',
}

type PillButtonProps = ComponentProps<'a'> & { variant?: keyof typeof variants }

export function PillButton({ variant = 'accent', className = '', children, ...props }: PillButtonProps) {
  return (
    <a {...externalProps(props.href)} {...props} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {isExternal(props.href) && <NewTabHint />}
    </a>
  )
}

const isExternal = (href?: string) => Boolean(href?.startsWith('http'))

// Links externos (WhatsApp, Instagram) abrem em nova aba sem dar acesso a window.opener.
export function externalProps(href?: string) {
  return isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}

export function NewTabHint() {
  return <span className="sr-only"> (abre em nova aba)</span>
}

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.5A8.4 8.4 0 1 1 21 11.5z" />
    </svg>
  )
}
