import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Image src="/assets/logo.png" alt="Logo" width={120} height={120} />
        </Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Load Forecast Simulator
        </Typography>
        <Typography variant="body1">
          Welcome to your Next.js + TypeScript + Nivo project!
        </Typography>
      </Paper>
    </Container>
  );
}
