import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TasksPage() {
  return (
    <Box sx={{ alignSelf: 'stretch' }}>
      <Typography variant="h4" gutterBottom>
        Tasks
      </Typography>
      <Typography variant="body1">
        This is the Tasks page.
      </Typography>
    </Box>
  );
}
