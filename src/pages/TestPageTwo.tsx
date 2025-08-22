import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TestPageTwo() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Test Page Two
      </Typography>
      <Typography variant="body1">
        This is another dummy page for testing routes.
      </Typography>
    </Box>
  );
}
