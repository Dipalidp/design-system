import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-[#e5426f] active:bg-[#d63b65]',
        secondary:
          'bg-transparent text-primary border border-primary hover:bg-primary/10 active:bg-primary/20',
        ghost:
          'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/80',
        danger:
          'bg-danger text-danger-foreground hover:bg-[#b91c1c] active:bg-[#991b1b]',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-8 rounded-[8px] gap-1.5 px-3 text-xs',
        lg: 'h-12 rounded-[8px] px-8 text-base',
        icon: 'size-10',
        'icon-sm': 'size-8',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

// Icon sizes that require an aria-label
const iconSizes = ['icon', 'icon-sm', 'icon-lg']

function Button({
  className,
  variant,
  size,
  asChild = false,
  'aria-label': ariaLabel,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  // Warn in development if icon button is missing aria-label
  if (
    process.env.NODE_ENV === 'development' &&
    size &&
    iconSizes.includes(size) &&
    !ariaLabel
  ) {
    console.warn(
      `Button: Icon buttons (size="${size}") must have an aria-label for accessibility.`
    )
  }

  return (
    <Comp
      type="button"
      data-slot="button"
      aria-label={ariaLabel}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
