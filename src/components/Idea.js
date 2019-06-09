import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const Idea = (props) =>{
    console.log(props)
    return (
           <ListItem>
            <ListItemText>
               <Typography component="p" gutterBottom>
                   <b>{props.idea.props.title ? (props.idea.props.title) : "Untitled"}</b> | {props.idea.props.desc}
                   <Divider light="true" />
               </Typography>
            </ListItemText>
       </ListItem>
    )
}

export default Idea