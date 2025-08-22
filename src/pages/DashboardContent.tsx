import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../components/Header';
import MainGrid from '../components/MainGrid';

export default function DashboardContent() {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: 'center',
        mx: 3,
        pb: 5,
        mt: { xs: 8, md: 0 },
      }}
    >
      <Header />
      <Stack direction="row" spacing={2} sx={{ alignSelf: 'flex-start' }}>
        <Button variant="contained" component={RouterLink} to="/test-one">
          Go to Test Page One
        </Button>
        <Button variant="outlined" component={RouterLink} to="/test-two">
          Go to Test Page Two
        </Button>
      </Stack>
      <MainGrid />
    </Stack>
  );
}
