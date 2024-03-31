import { useState, useEffect, PropsWithChildren } from 'react';
import { worker } from '@mocks/browser.ts';

const enable = process.env.ENV === 'local';

export const MockServiceWorkerProvider = ({ children }: PropsWithChildren) => {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (enable && !started) {
      worker.start().then(() => setStarted(true));
    }
  }, [started]);

  if (enable && !started) return null;

  return <>{children}</>;
};

export default MockServiceWorkerProvider;
