import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class Courses extends Component {
    render () {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.courseName}
                    </p>
                </Cell>

                <Cell col={8}>
                    <p>{this.props.courseDescription}
                    </p>
                </Cell>

            </Grid>

        )
    }
}

export default Courses;
