import { useState, useEffect, PropsWithChildren } from 'react';
import { worker } from '@/__tests__/browser.ts';

export const MockServiceWorkerProvider = ({
  children,
  enable,
}: { enable: boolean } & PropsWithChildren) => {
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
