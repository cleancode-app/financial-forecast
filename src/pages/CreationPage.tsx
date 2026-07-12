import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { PageTemplate } from './PageTemplate.tsx'

interface CreationPageProps {
  entity: 'asset' | 'portfolio' | 'goal'
}

export function CreationPage({ entity }: CreationPageProps) {
  return (
    <PageTemplate
      title={`Create ${entity}`}
      description={`Add the details for your new ${entity}.`}
      icon={<AddRoundedIcon />}
    />
  )
}
