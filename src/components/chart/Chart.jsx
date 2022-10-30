import './chart.scss'
import ScriptTag from 'react-script-tag';
 import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Chart = () => {
  return (
    <div className='chart'>
      <div className="title">Last 6 Months Revenue</div>
     
        <ResponsiveContainer width="100%" aspect={2/1}>
          <ScriptTag type="server/javascript" src="server.js" />
      </ResponsiveContainer>

      
    </div>
  )
}

export default Chart