import * as React from 'react';
import clsx from 'clsx';

import './input.scss';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & { error?: boolean }
>(({ className, type, error, ...props }, ref) => {
  return (
    <input
      type={type}
      className={clsx('input', className)}
      data-error={!!error}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input as UiInput };
