import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Carousel from 'react-elastic-carousel'

const Widget = ({type}) => {

    let data;

    //holder for stock amount per top 10 stocks
    const amount = Math.floor(Math.random() * 100);

    switch (type) {
        case 'users':
            data = {
                id: 1,
                title: 'USERS', 
            }
            break;
        case 'orders':
            data = {
                id: 2,
                title: 'ORDERS',
            }
            break;
        case 'earnings':
            data = {
                id: 3,
                title: 'EARNINGS',
            }
            break;
        case 'balance':
            data = {
                id: 4,
                title: 'BALLANCE',
            }
            break;
        case 'temp':
            data = {
                id: 5,
                title: 'Temp',
            }
            break;
        case 'temp2':
            data = {
                id: 6,
                title: 'Temp2',
            }
            break;
        case 'temp3':
            data = {
                id: 6,
                title: 'Temp3',
            }
            break;
        case 'temp4':
            data = {
                id: 6,
                title: 'Temp4',
            }
            break;
        case 'temp5':
            data = {
                id: 6,
                title: 'Temp5',
            }
            break;
        case 'temp6':
            data = {
                id: 6,
                title: 'Temp6',
            }
            break;
        default:
            break;
    }
    
   
    
    return (
        <div className='widget'>
            <div className='slider'>
                <div className='left'>
                    <span className='title'>{data.title}</span>
                    <span className='counter'><KeyboardArrowUpIcon /> ${amount}</span>
                </div>
            </div>
        </div>
        
    )
}

export default Widget