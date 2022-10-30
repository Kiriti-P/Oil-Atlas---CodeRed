import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


// fuk u reactb

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
              <span>Natural Gas</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar