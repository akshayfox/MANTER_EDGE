import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TestPageOne() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Test Page One
      </Typography>
      <Typography variant="body1">
        This is a dummy page for testing routes.
      </Typography>
    </Box>
  );
}
