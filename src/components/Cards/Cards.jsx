import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { StylesContext } from '@material-ui/styles';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { todayCases, todayRecovered, todayDeaths, updated } }) => {
    if(!todayCases){
        return 'Loading...';
    }
    console.log(todayCases);
    return (
        <div className={styles.container}> 
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.todayCases)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={todayCases}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases from COVID-19 today</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.todayRecovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={todayRecovered}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19 today </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.todayDeaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={todayDeaths}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths from COVID-19 today</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default Cards;