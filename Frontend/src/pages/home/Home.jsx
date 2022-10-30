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
              <Widget type='one' />
              <Widget type='two' />
              <Widget type='three' />
              <Widget type='four' />
              <Widget type='five' />
              <Widget type='six' />
              <Widget type='seven' />
              <Widget type='eight' />
              <Widget type='nine' />
              <Widget type='ten' />
            </Carousel>
            
          </div>
          

          <div className="charts">
            {/* <Feature /> */}
            <Chart />
          </div>
        </div>
    </div>
  )
}

export default Home