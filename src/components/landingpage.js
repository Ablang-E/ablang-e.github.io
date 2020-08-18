import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import picture from './front-img.png';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className = 'landing-grid'>
                    <Cell col={12}>
                    <img
                    src = {picture}
                    alt = "profilePic"
                    className = "picture"
                    />
                    <div className = "banner-text">
                        <p> </p>
                        <h1>Hello, I'm Eric Ablang!</h1>
                        <h1>Aspiring Software Engineer/Mobile App Developer.</h1>

                    <hr/>

                    <p>
                         C     |     C++     |     Java 8     |     HTML     |     CSS     |     React     |     MySQL     
                    </p>

                    <div className = "social-links">
                        {/* LinkedIn */}
                        <a href="http://linkedin.com/in/eric-ablang" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>

                    </div>

                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
