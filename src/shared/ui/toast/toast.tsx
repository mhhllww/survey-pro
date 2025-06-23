import * as React from 'react';

import { Toaster as Sonner, toast } from 'sonner';

import styles from './toast.module.scss';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className={styles['toast-title']}
      toastOptions={{
        classNames: {
          title: styles['toast-title'],
          description: styles['toast-description'],
          success: styles['success'],
          error: styles['error'],
          warning: styles['warning'],
          info: styles['info'],
        },
        duration: 5000,
      }}
      {...props}
    />
  );
};

interface ToastProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  description?: string;
}

const showToast = ({ title, description, type }: ToastProps) => {
  switch (type) {
    case 'success':
      return toast.success(title, {
        description: description,
      });
    case 'error':
      return toast.error(title, {
        description: description,
      });
    case 'warning':
      return toast.warning(title, {
        description: description,
      });
    case 'info':
      return toast.info(title, {
        description: description,
      });
  }
};
export { Toaster, showToast };
