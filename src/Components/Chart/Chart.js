import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.css';
const Chart = ({ data: {confirmed, recovered, deaths}, country }) => {
	const [dailyData, setDailyData] = useState([]);
	 useEffect( () => {
        fetch('https://covid19.mathdro.id/api/daily')
        .then(response => response.json())
        .then(data => setDailyData(data));
    }, [])
	const lineChart = (
		dailyData.length ? (
			<Line 
		data={{
			labels: dailyData.map(({reportDate}) => reportDate),
			datasets: [{
				data: dailyData.map(({totalConfirmed}) => totalConfirmed),
				label: 'Infected',
				borderColor: '#3333ff',
				 pointStyle: 'line',
				fill: true,
			}, {
				data: dailyData.map(({deaths}) => deaths.total),
				label: 'Deaths',
				borderColor: 'red',
				 pointStyle: 'line',
				backgroundColor: 'rgba(255, 0, 0, 0.5)',
				fill: true,
			}],
		}}
		/>
		) : null
	);
	console.log(confirmed, recovered, deaths);
	const barChart = (
		confirmed ? 
		(
			<Bar 
			data = {{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets : [{
					label: 'People',
					backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
					data:[confirmed.value, recovered.value, deaths.value]
				}]
			}}
			options = {{
				legend: {display: false },
				title: { display: true, text:`Current State In ${country}`},
			}}
			/>
		) : null
	)
	return(
		<div className={styles.container}>
			{country?barChart:lineChart}
		</div>
		);
}
export default Chart;