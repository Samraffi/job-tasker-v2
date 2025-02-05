'use client';

import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      {/* Auth provider will be added here */}
      {/* Theme provider will be added here */}
      {children}
    </>
  );
}
