import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { OwnerPageApp } from '@/app/OwnerPageApp';
import '@/app/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OwnerPageApp />
  </StrictMode>,
);

