
import React from 'react'
import {Card , CardHeader , IconButton} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const Box = ({planetDetails}) => {
    return (
        <div>
           <Card>
            <CardHeader action={
                <IconButton>
                   <CheckCircleOutlineIcon/>
                </IconButton>
            } 
            
            title={planetDetails.name} subheader={`Distance in Km ${planetDetails.distance}`}/>
           </Card>
        </div>
    )
}

export default Box
