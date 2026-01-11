'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { theme } from '@/theme/theme';
import { createEmotionCache } from '@/lib/emotionCache';
import { ReactNode, useState } from 'react';

export default function MuiProvider({ children }: { children: ReactNode }) {
  const [cache] = useState(() => createEmotionCache());

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
