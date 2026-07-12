import FlagRoundedIcon from '@mui/icons-material/FlagRounded'
import { PageTemplate } from './PageTemplate.tsx'

export function GoalsPage() {
  return (
    <PageTemplate
      title="Goals"
      description="Define financial targets and track your progress towards them."
      icon={<FlagRoundedIcon />}
    />
  )
}
