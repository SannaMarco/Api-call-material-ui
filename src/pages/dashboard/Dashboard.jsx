import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PaperComponent from './components/Paper'
import NavBar from './components/NavBar'
import Layout from "../../layout/Layout";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      }
}));

function Dashboard() {
    const [randomPersonInfo, setRandomPersonInfo] = useState([]);
    const classes = useStyles();

    useEffect(() =>{
        fetchData().then((data) => {
            const results = data ? data.results : [];
            setRandomPersonInfo(results);
        });
    }, [])

    const fetchData = async () =>{
        try {
            const { data } = await axios.get('https://randomuser.me/api');
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    const getUsername = (userInfo) =>{
        const {name: {first, last}} = userInfo;
        return `${first} ${last}`;
    }

    const getGender = (userInfo) =>{
        const {gender} = userInfo;
        return `${gender}`;
    }

    const getAddress = (userInfo) =>{
        const {location : {street: {name, number}}} = userInfo;
        return `${name} ${number}`;
    }

    return (
        <Layout>
        <div>
            <Grid container spacing={2}>
                {randomPersonInfo.map((userInfo, idx) => (
                    <Grid item xs={4}>
                        <PaperComponent data={getUsername(userInfo)} className={classes.paper} />
                    </Grid>
                ))}  
                {randomPersonInfo.map((userInfo, idx) => (
                    <Grid item xs={4}>
                        <PaperComponent data={getGender(userInfo)} className={classes.paper} />
                    </Grid>
                ))}  
                {randomPersonInfo.map((userInfo, idx) => (
                    <Grid item xs={4}>
                        <PaperComponent data={getAddress(userInfo)} className={classes.paper} />
                    </Grid>
                ))}  
            </Grid>
        </div>
        </Layout>
        
    )
}

export default Dashboard;
