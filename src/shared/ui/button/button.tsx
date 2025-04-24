import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import styles from './button.module.scss';
import clsx from 'clsx';

type ButtonDesign = 'destructive' | 'outline' | 'foreground' | 'link';
type ButtonSize = 'md' | 'sm' | 'lg' | 'icon';
type ButtonLayout = 'block' | 'inline';

// Add button type
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  design?: ButtonDesign;
  size?: ButtonSize;
  layout?: ButtonLayout;
  className?: string;
  asChild?: boolean;
  type?: ButtonType;
  children: React.ReactNode;
}

// TODO: FIX PROPS (type='submit')
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      design = 'foreground',
      size = 'md',
      layout = 'inline',
      className,
      asChild,
      children,
      type,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={clsx(
          styles.button,
          styles[design],
          styles[size],
          styles[layout],
          className
        )}
        ref={ref}
        type={type}
        {...props}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button as UiButton };
