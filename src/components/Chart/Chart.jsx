import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import styles from './Chart.module.css';


const Chart = ({ data: { todayCases, todayDeaths, todayRecovered }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    const barChart = (
        todayCases
        ? (
            <Bar 
                data = {{
                    labels: ["Cases Today", "Recoveries Today", 'Deaths Today'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data: [todayCases, todayRecovered, todayDeaths] 
                    }]
                }}
                options = {{
                    legend: { display : false },
                    title: { display : true, text: `Current state in ${country}`}
                }}
            />
        ) : null
    )


    return (
        <div className={styles.container}>
            {barChart}
        </div>
    )
}

export default Chart;