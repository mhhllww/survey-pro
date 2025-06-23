import * as React from 'react';
import './textarea.scss';
import clsx from 'clsx';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'> & { error?: boolean }
>(({ className, error, ...props }, ref) => {
  return (
    <textarea
      className={clsx('textarea', className)}
      data-error={!!error}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea as UiTextarea };
