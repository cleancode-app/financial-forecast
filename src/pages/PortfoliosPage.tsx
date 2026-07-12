import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded'
import { PageTemplate } from './PageTemplate.tsx'

export function PortfoliosPage() {
  return (
    <PageTemplate
      title="Portfolios"
      description="Group assets into portfolios and review their projected performance."
      icon={<PieChartRoundedIcon />}
    />
  )
}
