import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { WalkerPageApp } from '@/app/WalkerPageApp';
import '@/app/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalkerPageApp />
  </StrictMode>,
);
