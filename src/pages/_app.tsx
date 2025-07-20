import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import DefaultLayout from '../components/layouts/default';

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: {
      main: '#6eb35f',
    },
    background: {
      default: '#e6e6da',
      paper: '#fff',
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
