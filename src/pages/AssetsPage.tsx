import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import { PageTemplate } from './PageTemplate.tsx'

export function AssetsPage() {
  return (
    <PageTemplate
      title="Assets"
      description="View and manage the assets used in your financial forecasts."
      icon={<AccountBalanceWalletRoundedIcon />}
    />
  )
}
