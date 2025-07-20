import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import Image from 'next/image';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Image src='/assets/logo.png' alt="Logo" width={300} height={120} />
        </Box>
        {children}
      </Paper>
    </Container>
  );
}
