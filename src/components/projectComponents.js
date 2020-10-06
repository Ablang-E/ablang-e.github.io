import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class Projects1 extends Component {
    render () {
        return (
            <Grid>
                <Cell col={4} className='projectNameCSS'>
                    <p>{this.props.projectName}
                    </p>
                </Cell>

                <Cell col={8} className='projectNameCSS'>
                    <p>{this.props.projectDescription}
                    </p>

                    <p>Language(s): {this.props.projectLang}
                    </p>
                </Cell>
            </Grid>

        )
    }
}

export default Projects1;
