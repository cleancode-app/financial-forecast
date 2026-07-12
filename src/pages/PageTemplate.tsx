import { Box, Paper, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'

interface PageTemplateProps {
  title: string
  description: string
  icon: ReactNode
  children?: ReactNode
}

export function PageTemplate({ title, description, icon, children }: PageTemplateProps) {
  return (
    <Stack spacing={4} sx={{ width: '100%', maxWidth: 1100, mx: 'auto' }}>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <Box
          sx={{
            width: 52,
            height: 52,
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
            borderRadius: 2.5,
            bgcolor: 'primary.main',
            color: 'common.white',
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 750, letterSpacing: '-0.03em' }}>
            {title}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 0.5 }}>
            {description}
          </Typography>
        </Box>
      </Stack>

      {children ?? (
        <Paper
          variant="outlined"
          sx={{ p: { xs: 3, sm: 5 }, minHeight: 260, display: 'grid', placeItems: 'center', borderRadius: 3 }}
        >
          <Typography color="text.secondary">This page is ready for content.</Typography>
        </Paper>
      )}
    </Stack>
  )
}
