import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CompanyPageApp } from '@/app/CompanyPageApp';
import '@/app/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CompanyPageApp />
  </StrictMode>,
);

