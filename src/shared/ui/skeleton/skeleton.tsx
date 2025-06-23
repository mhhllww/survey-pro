import * as React from 'react';
import clsx from 'clsx';

import './skeleton.scss';

export const Skeleton = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return <div className={clsx('skeleton', className)} {...props} />;
};
