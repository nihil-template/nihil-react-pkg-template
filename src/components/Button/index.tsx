import { ComponentProps, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/src/utils';

const css = cva(
  `font-900 p-2 rounded-2`,
  {
    variants: {
      color: {
        red: `text-red-500`,
        blue: `text-blue-500`,
      },
    },
    compoundVariants: [
      {
        color: 'red',
        className: `bg-red-100`,
      },
      {
        color: 'blue',
        className: `bg-blue-100`,
      },
    ],
    defaultVariants: {
      color: 'red',
    },
  }
);

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof css>;

export const Button = (
  forwardRef<HTMLButtonElement, ButtonProps>(({
    color, className, children, ...props
  }, ref) => {
    return (
      <button ref={ref} className={cn(css({ color, className, }))} {...props}>
        {children}
      </button>
    );
  })
);

Button.displayName = 'Button';
