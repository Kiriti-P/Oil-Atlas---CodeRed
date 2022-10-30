import './chart.scss'
import * as React from 'react';
import CanvasJSReact from '../../canvasjs.react';
import data from './DataBase/ProducedCrudeData.json';

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// import api 
// import Api from '/api';
// import { useEffect, useState } from 'react'
var subjectObject = {
  "Petroleum": {
    "Summary": ["U.S. Crude Oil Supply and Disposition", "Supply and Disposition"],
    "Crude Reserves and Production": ["Crude Oil Production", "Crude Oil and Natural Gas Drilling Activitiy"],
  },
  "Natural Gas": {
    "Summary": ["Natural Gas Summary"],
    "Production": ["Number of Gas Producing Oil Wells", "Natural Gas Plant Processing"]
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    chapterSel.length = 1;
    topicSel.length = 1;
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    chapterSel.length = 1;
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}


  



let crudeData = [];
for (let i = 0; i < data["Data 1"].length; i++) {
	if (i%5 === 0) {
		crudeData.push({
			label: data["Data 1"].at(i).Date,
			y: data["Data 1"].at(i)['U.S. Field Production of Crude Oil (Thousand Barrels)']
	})
	}
}


const Chart = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
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
			interval: 5,
			labelAngle: 90
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