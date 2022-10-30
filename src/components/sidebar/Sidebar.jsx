import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
          <span className='logo'>Admin Panel</span>
        </div>
        <hr />
        <div className='center'>
          <ul>
            <p className="title">MAIN MENU</p>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
            <p className="title">LISTS MENU</p>
            <li>
              <Inventory2Icon className='icon' />
              <span>Petroleum-Crude</span>
            </li>
            <li>
              <ProductionQuantityLimitsIcon className='icon' />
              <span>Net Production</span>
            </li>
            <li>
              <QueryStatsIcon className='icon' />
              <span>Stocks</span>
            </li>
            <p className="title">OTHER MENU</p>
            <li>
              <LocalShippingIcon className='icon' />
              <span>Status</span>
            </li>
            <p className="title">SERVICES</p>
            <li>
              <PsychologyIcon className='icon' />
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className='icon' />
              <span>Settings</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar