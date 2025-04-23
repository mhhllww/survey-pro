import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

const layoutTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

export const AnimatedRoute = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence mode={'wait'}>
      <motion.div {...layoutTransition}>{children}</motion.div>
    </AnimatePresence>
  );
};
