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

class IdeaList extends Component {
    state = {
        ideas: [],
    }

    constructor() {
        super()
        this.getIdeas()
    }

    getIdeas = () => {
        this.state.ideas.push(<Idea desc="Unmastered" />)
        this.state.ideas.push(<Idea title="This is my idea" desc="elevator pitch" author="rambo" />)
    }

    render() {
        return (
            <div>
                {this.state.ideas ? (
                    <div style={{ listStyles }}>
                        <List component="nav" aria-label="Idea List">
                            {this.state.ideas.map(
                                currIdea => {
                                    console.log(currIdea);
                                    return <Idea
                                        title={currIdea.props.title}
                                        desc={currIdea.props.desc}
                                        author={currIdea.props.author} />
                                }
                            )}

                        </List>

                    </div>
                ) : "No ideas found"}
            </div>
        )
    }
}

const Idea = ({ title, desc, author }) => (
    <ListItem>
        <ListItemText>
            <Typography component="p" gutterBottom>
                <b>{title ? (title) : "Untitled"}</b> | {desc} | {author}
            </Typography>
            <Divider />
        </ListItemText>
    </ListItem>
);

export default IdeaList;