import AddRoundedIcon from '@mui/icons-material/AddRounded'
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import FlagRoundedIcon from '@mui/icons-material/FlagRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded'
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import {
  AppBar,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import { ForecastChart } from './ForecastChart.tsx'

const drawerWidth = 272

const navigation = [
  { label: 'Overview', icon: DashboardRoundedIcon },
  { label: 'Assets', icon: AccountBalanceWalletRoundedIcon },
  { label: 'Portfolios', icon: PieChartRoundedIcon },
  { label: 'Goals', icon: FlagRoundedIcon },
]

const actions = ['Create asset', 'Create portfolio', 'Create goal']

function App() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activePage, setActivePage] = useState('Overview')

  const selectPage = (page: string) => {
    setActivePage(page)
    setMobileOpen(false)
  }

  const sidebar = (
    <Stack sx={{ height: '100%', bgcolor: '#f8fafc' }}>
      <Box sx={{ px: 2.5, pt: 3, pb: 2 }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: '0.09em' }}
        >
          Workspace
        </Typography>
      </Box>

      <List disablePadding sx={{ px: 1.5 }}>
        {navigation.map((item) => {
          const NavigationIcon = item.icon

          return (
          <ListItemButton
            key={item.label}
            selected={activePage === item.label}
            onClick={() => selectPage(item.label)}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              px: 1.5,
              '&.Mui-selected': {
                bgcolor: 'rgba(37, 99, 235, 0.09)',
                color: 'primary.main',
              },
              '&.Mui-selected:hover': { bgcolor: 'rgba(37, 99, 235, 0.13)' },
            }}
          >
            <Box
              sx={{
                width: 30,
                height: 30,
                mr: 1.5,
                display: 'grid',
                placeItems: 'center',
                borderRadius: 1.5,
                bgcolor: activePage === item.label ? 'primary.main' : '#e2e8f0',
                color: activePage === item.label ? 'common.white' : 'text.secondary',
              }}
            >
              <NavigationIcon sx={{ fontSize: 18 }} />
            </Box>
            <ListItemText
              primary={item.label}
              slotProps={{ primary: { sx: { fontSize: 14, fontWeight: 600 } } }}
            />
          </ListItemButton>
          )
        })}
      </List>

      <Divider sx={{ mx: 2.5, my: 2.5 }} />

      <Box sx={{ px: 2.5 }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: '0.09em' }}
        >
          Quick actions
        </Typography>
        <Stack spacing={1.25} sx={{ mt: 1.5 }}>
          {actions.map((action, index) => (
            <Button
              key={action}
              fullWidth
              variant={index === 0 ? 'contained' : 'outlined'}
              onClick={() => selectPage(action.replace('Create ', 'New '))}
              sx={{ justifyContent: 'flex-start', py: 1.1 }}
            >
              <AddRoundedIcon sx={{ mr: 1, fontSize: 20 }} />
              {action}
            </Button>
          ))}
        </Stack>
      </Box>

      <Box sx={{ mt: 'auto', px: 2.5, py: 2.5 }}>
        <Typography variant="caption" color="text.secondary">
          Financial planning, made clearer.
        </Typography>
      </Box>
    </Stack>
  )

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f1f5f9' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ zIndex: theme.zIndex.drawer + 1, borderBottom: '1px solid', borderColor: 'divider' }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }}>
          {!isDesktop && (
            <Tooltip title="Open navigation">
              <IconButton
                color="inherit"
                edge="start"
                onClick={() => setMobileOpen(true)}
                sx={{ mr: 1.5 }}
                aria-label="Open navigation"
              >
                <MenuRoundedIcon />
              </IconButton>
            </Tooltip>
          )}
          <Box
            sx={{
              width: 34,
              height: 34,
              mr: 1.5,
              display: 'grid',
              placeItems: 'center',
              borderRadius: 2,
              bgcolor: 'rgba(255,255,255,.16)',
              fontWeight: 800,
            }}
          >
            <ShowChartRoundedIcon sx={{ fontSize: 21 }} />
          </Box>
          <Typography variant="h6" component="h1" sx={{ fontWeight: 700, letterSpacing: '-0.01em' }}>
            Financial Forecast
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isDesktop ? 'permanent' : 'temporary'}
        open={isDesktop || mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            mt: { xs: '64px', md: '72px' },
            height: { xs: 'calc(100% - 64px)', md: 'calc(100% - 72px)' },
            borderRightColor: 'divider',
          },
        }}
      >
        {sidebar}
      </Drawer>

      <Box
        component="main"
        sx={{ ml: { md: `${drawerWidth}px` }, pt: { xs: '64px', md: '72px' }, minHeight: '100vh' }}
      >
        <Box
          component="nav"
          aria-label="Breadcrumb"
          sx={{
            height: 58,
            px: { xs: 2.5, sm: 4 },
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'common.white',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Breadcrumbs separator="/" aria-label="breadcrumb">
            <Link
              underline="hover"
              color="text.secondary"
              component="button"
              onClick={() => selectPage('Overview')}
              sx={{ fontSize: 14 }}
            >
              Home
            </Link>
            <Typography color="text.primary" sx={{ fontSize: 14, fontWeight: 600 }}>
              {activePage}
            </Typography>
          </Breadcrumbs>
        </Box>

        <Box
          sx={{
            minHeight: 'calc(100vh - 130px)',
            px: { xs: 2.5, sm: 4, lg: 6 },
            py: { xs: 5, md: 7 },
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Stack spacing={4} sx={{ width: '100%', maxWidth: 900, alignItems: 'center' }}>
            <Stack spacing={2} sx={{ maxWidth: 540, textAlign: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                width: 72,
                height: 72,
                display: 'grid',
                placeItems: 'center',
                borderRadius: 4,
                bgcolor: 'common.white',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 12px 30px rgba(15, 23, 42, 0.07)',
                color: 'primary.main',
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              <TrendingUpRoundedIcon sx={{ fontSize: 34 }} />
            </Box>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 750, letterSpacing: '-0.03em' }}>
              Welcome to Financial Forecast
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 460, lineHeight: 1.7 }}>
              Build a clear picture of your financial future. Start by creating an asset,
              portfolio, or goal from the sidebar.
            </Typography>
            </Stack>
            {activePage === 'Overview' && (
              <Paper
                variant="outlined"
                sx={{ width: '100%', p: { xs: 2, sm: 3 }, borderRadius: 3 }}
              >
                <ForecastChart />
              </Paper>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default App
