import * as React from 'react';

import { Toaster as Sonner } from 'sonner';

import clsx from 'clsx';

import styles from './alert.module.scss';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        duration: 300000,
      }}
      {...props}
    />
  );
};

type AlertDesign = 'default' | 'success' | 'error';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  design?: AlertDesign;
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
  <h5
    ref={ref}
    className={clsx(styles['__alert-title'], className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(styles['__alert-description'], className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export {
  Alert as UiAlert,
  AlertTitle as UiAlertTitle,
  AlertDescription as UiAlertDescription,
  Toaster,
};
