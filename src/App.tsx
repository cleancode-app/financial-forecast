import AddRoundedIcon from '@mui/icons-material/AddRounded'
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import FlagRoundedIcon from '@mui/icons-material/FlagRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded'
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded'
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
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import {
  HashRouter,
  Link as RouterLink,
  Route,
  Routes,
  matchPath,
  useLocation,
} from 'react-router-dom'
import { AssetsPage } from './pages/AssetsPage.tsx'
import { CreationPage } from './pages/CreationPage.tsx'
import { GoalsPage } from './pages/GoalsPage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { OverviewPage } from './pages/OverviewPage.tsx'
import { PortfoliosPage } from './pages/PortfoliosPage.tsx'

const drawerWidth = 272

const navigation = [
  { label: 'Overview', path: '/', icon: DashboardRoundedIcon },
  { label: 'Assets', path: '/assets', icon: AccountBalanceWalletRoundedIcon },
  { label: 'Portfolios', path: '/portfolios', icon: PieChartRoundedIcon },
  { label: 'Goals', path: '/goals', icon: FlagRoundedIcon },
]

const actions = [
  { label: 'Create asset', path: '/assets/new' },
  { label: 'Create portfolio', path: '/portfolios/new' },
  { label: 'Create goal', path: '/goals/new' },
]

const pageTitles: Record<string, string> = {
  '/': 'Overview',
  '/assets': 'Assets',
  '/assets/new': 'Create asset',
  '/portfolios': 'Portfolios',
  '/portfolios/new': 'Create portfolio',
  '/goals': 'Goals',
  '/goals/new': 'Create goal',
}

function AppShell() {
  const theme = useTheme()
  const location = useLocation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const pageTitle = pageTitles[location.pathname] ?? 'Page not found'

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
          const selected = item.path === '/'
            ? location.pathname === '/'
            : Boolean(matchPath(`${item.path}/*`, location.pathname))

          return (
            <ListItemButton
              key={item.path}
              component={RouterLink}
              to={item.path}
              selected={selected}
              onClick={() => setMobileOpen(false)}
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
                  bgcolor: selected ? 'primary.main' : '#e2e8f0',
                  color: selected ? 'common.white' : 'text.secondary',
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
              key={action.path}
              component={RouterLink}
              to={action.path}
              fullWidth
              variant={index === 0 ? 'contained' : 'outlined'}
              onClick={() => setMobileOpen(false)}
              sx={{ justifyContent: 'flex-start', py: 1.1 }}
            >
              <AddRoundedIcon sx={{ mr: 1, fontSize: 20 }} />
              {action.label}
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
            <Link component={RouterLink} to="/" underline="hover" color="text.secondary" sx={{ fontSize: 14 }}>
              Home
            </Link>
            <Typography color="text.primary" sx={{ fontSize: 14, fontWeight: 600 }}>
              {pageTitle}
            </Typography>
          </Breadcrumbs>
        </Box>

        <Box sx={{ minHeight: 'calc(100vh - 130px)', px: { xs: 2.5, sm: 4, lg: 6 }, py: { xs: 5, md: 7 } }}>
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/assets/new" element={<CreationPage entity="asset" />} />
            <Route path="/portfolios" element={<PortfoliosPage />} />
            <Route path="/portfolios/new" element={<CreationPage entity="portfolio" />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/goals/new" element={<CreationPage entity="goal" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  )
}

function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  )
}

export default App
