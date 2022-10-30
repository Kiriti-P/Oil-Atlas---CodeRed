import './chart.scss'
import React from 'react';
import CanvasJSReact from '../../canvasjs.react';
import data from './DataBase/ProducedCrudeData.json';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// import api 
// import Api from '/api';
// import { useEffect, useState } from 'react'

let crudeData = [];
for (let i = 0; i < data["Data 1"].length; i++) {
	if (i%20 === 0) {
		crudeData.push({
			label: data["Data 1"].at(i).Date,
			y: data["Data 1"].at(i)['U.S. Field Production of Crude Oil (Thousand Barrels)']
	})
	}
}


const Chart = () => {
	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "light2", // "light1", "dark1", "dark2"
		title:{
			text: "U.S. Total Crude Production"
		},
		axisY: {
			title: "Crude Produced\n(Thousand Barrels)",
			//suffix: "%"
		},
		axisX: {
			title: "Year",
			//prefix: "W",
			//interval: 2
		},
		
		data: [{
			type: "column",
			toolTipContent: "Week {label}: {y}",
			dataPoints: crudeData
		}]
	}
	return (
		<div className='chart'>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
	);
}
//module.exports = Chart;
export default Chart;