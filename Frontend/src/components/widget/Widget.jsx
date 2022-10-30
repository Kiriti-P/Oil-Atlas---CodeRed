import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import oilIcon from '@mui/icons-material/';

const Widget = ({type}) => {

    let data;

    //holder for stock amount per top 10 stocks
    const amount = [];

    switch (type) {
        case 'one':
            data = {
                id: 1,
                title: 'Exxon Mobil Corporation',
                amount: 110.7, 
            }
            break;
        case 'two':
            data = {
                id: 2,
                title: 'Chevron Corporation',
                amount: 179.98,
            }
            break;
        case 'three':
            data = {
                id: 3,
                title: 'Shell plc	',
                amount: 56.18,
            }
            break;
        case 'four':
            data = {
                id: 4,
                title: 'ConocoPhillips',
                amount: 127.17	,
            }
            break;
        case 'five':
            data = {
                id: 5,
                title: 'TotalEnergies SE	',
                amount: 54.77,
            }
            break;
        case 'six':
            data = {
                id: 6,
                title: 'Equinor ASA	',
                amount: 36.81,
            }
            break;
        case 'seven':
            data = {
                id: 6,
                title: 'BP p.l.c.',
                amount: 33.15,
            }
            break;
        case 'eight':
            data = {
                id: 6,
                title: 'Petróleo Brasileiro S.A. - Petrobras',
                amount: 13.45,
            }
            break;
        case 'nine':
            data = {
                id: 6,
                title: 'Enbridge Inc.',
                amount: 39.05,
            }
            break;
        case 'ten':
            data = {
                id: 6,
                title: 'EOG Resources, Inc.',
                amount: 133.69,
            }
            break;
        default:
            break;
    }
    
   
    
    return (
        <div className='widget'>
            <div className='slider'>
                <div className='left'>
                    <span className='title'>{data.title} <KeyboardArrowUpIcon /></span>
                    <span className='counter'> ${data.amount}</span>
                </div>
            </div>
        </div>
        
    )
}

export default Widget