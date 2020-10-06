import React, { Component} from 'react';
import { Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
    render () {
        return(
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex'}}>{this.props.skill}  </div>
                    <div style={{display: 'flex'}}><ProgressBar className="bar" style={{margin: 0, width: '75%'}} progress={this.props.progress} buffer={this.props.buffer}/> </div>
                </Cell>
            </Grid>
        )
    }
}


export default Skills
