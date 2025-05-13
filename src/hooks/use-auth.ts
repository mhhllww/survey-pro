import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

// @ts-ignore
import { auth } from '@/shared/lib/firebase.ts';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};
