import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

function ApiCall() {

    
    const [randomPersonInfo, setRandomPersonInfo] = useState([]);

    const url = 'https://randomuser.me/api';
    

    const fetchData = async () =>{
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() =>{
        fetchData().then((data) =>{
            setRandomPersonInfo(data.results);
        });
    }, [])


    const getUsername = (userInfo) =>{
        const {name: {first, last}} = userInfo;
        return `${first} ${last}`;
    }

    const useStyles = makeStyles((theme) => ({

                
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        }));

const classes = useStyles();

    return (
        <div>
        <Grid container spacing={3}>

            {randomPersonInfo.map((userInfo, idx) => (
                     <Grid item xs={12}>
                         <Paper className={classes.paper} >
                             {getUsername(userInfo)}
                             
                         </Paper>
                     </Grid>
                ))}
                
            {randomPersonInfo.map((userInfo, idx) => (
                     <Grid item xs={12}>
                         <Paper className={classes.paper} >
                         </Paper>
                     </Grid>
                ))}

        </Grid>


            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Paper className={classes.paper} >cascata</Paper>
                </Grid>
            </Grid>



        </div>
    )
}

export default ApiCall;
