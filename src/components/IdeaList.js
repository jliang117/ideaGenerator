import React, { Component } from 'react'
import List from '@material-ui/core/List';

import Idea from './Idea';


const listStyles = {
    width: '100%',
    maxWidth: 1200,
}

class IdeaList extends Component {

    state = {
        ideas: [
            <Idea title="test" desc="testDesc" />,
            <Idea title="This is my idea" desc="elevator pitch" />,
            <Idea desc="Unmastered" />,
        ],
    }

    constructor() {
        super()
        this.getIdeas()
    }

    getIdeas = () => {
        console.log(this.state.ideas)
    }

    render() {
        return (
            <div>
                {this.state.ideas ? (
                    <div style={{listStyles}}>
                        <List component="nav" aria-label="Idea List">
                            {this.state.ideas.map(
                                currIdea => (
                                    <Idea idea={currIdea} />
                                )
                            )}
                        </List>

                    </div>
                ) : "No ideas found"}
            </div>
        )
    }
}

export default IdeaList;