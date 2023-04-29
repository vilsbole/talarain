/** @jsxImportSource theme-ui */

import React, { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      variant: 'layout.root',
    }}
  >
    <header
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        variant: 'layout.header',
      }}
    >
      Header content
    </header>
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
        variant: 'layout.main',
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: 'auto',
          px: 3,
          variant: 'layout.container',
        }}
      >
        {children}
      </div>
    </main>
    <footer
      sx={{
        width: '100%',
        variant: 'layout.footer',
      }}
    >
      Footer content
    </footer>
  </div>
);
