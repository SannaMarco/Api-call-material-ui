import React from 'react'
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

function PaperComponent(props) {
    return (
     <Paper className={clsx(props.className)} >
         {props.data}
     </Paper>
    )
}

export default PaperComponent;
