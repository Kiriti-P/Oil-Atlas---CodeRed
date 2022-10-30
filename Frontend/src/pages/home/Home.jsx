import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import Carousel from 'react-elastic-carousel'


const Home = () => {

  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer" >
          <Navbar />
          <div className='widgets' >
            <Carousel enableAutoPlay autoPlaySpeed={5000}>
              <Widget type='users' />
              <Widget type='orders' />
              <Widget type='earnings' />
              <Widget type='balance' />
              <Widget type='temp' />
              <Widget type='temp2' />
              <Widget type='temp3' />
              <Widget type='temp4' />
              <Widget type='temp5' />
              <Widget type='temp6' />
            </Carousel>
            
          </div>
          

          <div className="charts">
            <Feature />
            <Chart />
          </div>
        </div>
    </div>
  )
}

export default Home