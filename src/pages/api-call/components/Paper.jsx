import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function PaperComponent(props) {
    return (
        <div>
            <Grid item xs={12}>
                 <Paper className={props.classes.paper} >
                     {props.data}
                 </Paper>
            </Grid>
        </div>
    )
}

export default PaperComponent;
