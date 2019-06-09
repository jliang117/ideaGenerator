import React, { Component } from 'react'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const listStyles = {
    width: '100%',
    maxWidth: 1200,
}

const IdeaList = ({ ideaList }) => {
    
    return (
        <div>
            {ideaList && ideaList.length ? (
                <div style={{ listStyles }}>
                    <List aria-label="Idea List">
                        {ideaList.map(currIdea => {
                            console.log(currIdea);
                            return <Idea
                                title={currIdea.props.title}
                                desc={currIdea.props.desc}
                                author={currIdea.props.author} />
                            }
                        )}

                    </List>
                </div>
            ) : 'Currently no ideas, submit one!'}
        </div>
    )

}

const Idea = ({ title, desc, author }) => (
    <ListItem>
        <ListItemText>
            <Typography component="p" gutterBottom>
                <b>{title ? (title) : "Untitled"}</b> | {desc} | <i>{author ? ("By " + author) : "Unknown"}</i>
            </Typography>
            <Divider />
        </ListItemText>
    </ListItem>
);

export{
    Idea
}
export default IdeaList;