import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import { Button, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <Paper
      variant="outlined"
      sx={{
        width: '100%',
        maxWidth: 680,
        mx: 'auto',
        px: { xs: 3, sm: 6 },
        py: { xs: 6, sm: 8 },
        borderRadius: 3,
        textAlign: 'center',
      }}
    >
      <Stack spacing={2.5} sx={{ alignItems: 'center' }}>
        <ErrorOutlineRoundedIcon sx={{ fontSize: 64, color: 'primary.main' }} />
        <Typography variant="overline" color="primary.main" sx={{ fontWeight: 800, letterSpacing: '0.12em' }}>
          Error 404
        </Typography>
        <Typography variant="h3" component="h2" sx={{ fontWeight: 750, letterSpacing: '-0.04em' }}>
          Page not found
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 460, lineHeight: 1.7 }}>
          The page you requested doesn’t exist or may have moved. Check the address or return to the overview.
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          size="large"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{ mt: 1 }}
        >
          Back to overview
        </Button>
      </Stack>
    </Paper>
  )
}
