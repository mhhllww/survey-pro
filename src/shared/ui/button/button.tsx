import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import styles from './button.module.scss';
import clsx from 'clsx';

type ButtonDesign = 'destructive' | 'outline' | 'foreground' | 'link' | 'black';
type ButtonSize = 'md' | 'sm' | 'lg' | 'icon';
type ButtonLayout = 'block' | 'inline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  design?: ButtonDesign;
  size?: ButtonSize;
  layout?: ButtonLayout;
  className?: string;
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      design = 'foreground',
      size = 'md',
      layout = 'inline',
      className,
      asChild,
      children,
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
        {...props}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button as UiButton };
