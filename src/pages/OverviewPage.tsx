import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import { Paper } from '@mui/material'
import { ForecastChart } from '../ForecastChart.tsx'
import { PageTemplate } from './PageTemplate.tsx'

export function OverviewPage() {
  return (
    <PageTemplate
      title="Welcome to Financial Forecast"
      description="Build a clear picture of your financial future across assets, portfolios, and goals."
      icon={<TrendingUpRoundedIcon />}
    >
      <Paper variant="outlined" sx={{ width: '100%', p: { xs: 2, sm: 3 }, borderRadius: 3 }}>
        <ForecastChart />
      </Paper>
    </PageTemplate>
  )
}
