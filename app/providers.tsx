// app/providers.tsx
"use client";

import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Global, css } from '@emotion/react';
import { theme } from '../styles/theme';

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-family: 'Heebo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    direction: rtl;
  }
  body {
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }
`;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}