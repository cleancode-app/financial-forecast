import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import {ForecastChart} from "./ForecastChart.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Stack spacing={3}>
          <Typography variant="h4" component="h1">
            Financial Forecast
          </Typography>
          <Typography variant="body1">
            Vite + React + TypeScript + Material UI starter.
          </Typography>
          <Box>
            <Button variant="contained" onClick={() => setCount((value) => value + 1)}>
              Count is {count}
            </Button>
          </Box>
        </Stack>
      </Paper>
        <Paper>
            <Stack spacing={3}>
                <ForecastChart/>
            </Stack>
        </Paper>
    </Container>
  )
}

export default App
