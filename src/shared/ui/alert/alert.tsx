import * as React from 'react';

import clsx from 'clsx';

import styles from './alert.module.scss';

type ButtonDesign = 'default' | 'destructive';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  design?: ButtonDesign;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, design = 'default', ...props }, ref) => (
    <div
      ref={ref}
      role='alert'
      className={clsx(styles.alert, styles[design], className)}
      {...props}
    />
  )
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={clsx(styles.alertTitle, className)} {...props} />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(styles.alertDescription, className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
