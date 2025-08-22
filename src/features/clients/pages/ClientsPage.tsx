import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ClientsPage() {
  return (
    <Box sx={{ alignSelf: 'stretch' }}>
      <Typography variant="h4" gutterBottom>
        Clients
      </Typography>
      <Typography variant="body1">
        This is the Clients page.
      </Typography>
    </Box>
  );
}
