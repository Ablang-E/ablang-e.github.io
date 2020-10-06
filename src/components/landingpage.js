import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import picture from './frontImage2.png';

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
                        <p2> I am currently a senior at the University of Illinois at Chicago with an anticipated graduation date of Spring 2021. This website serves as my Portfolio and as a landing page for my projects in CS 428. I created this website
                        so that I can learn more about HTML, CSS, and React framework. Also check out my projects page to check out some of my previous work!</p2>
                        <p> </p>
                    <hr/>

                    <p>
                         C     |     C++     |     Java 8     |     HTML     |     CSS     |     React     |     MySQL
                    </p>

                    <div className = "social-links">
                        {/* LinkedIn */}
                        <a href="http://linkedin.com/in/eric-ablang" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/Ablang-E" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true"/>
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
