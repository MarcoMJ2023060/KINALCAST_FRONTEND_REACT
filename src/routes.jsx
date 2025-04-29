import { DashboardPage } from './pages/dashboard'
import { AuthPage } from './pages/auth'
import { ChannelView } from './components/channel/ChannelView'

export const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>}
]

