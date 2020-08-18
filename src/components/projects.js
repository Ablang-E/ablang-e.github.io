import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import ProjectsComp from './projectComponents';

class Projects extends Component {
    render() {
        return(
            <div className='headers'>
            <h style={{paddingLeft: '1.2em'}}>Project Name</h>
            <h style={{paddingLeft: '3.8em'}}>Description</h>
            <Grid>



            <Cell col={7}>
            <ProjectsComp
            projectName="Rock Paper Scissor Lizard Splock"
            projectDescription="Developed a program to recreate the Rock, Paper, Scissor game but included two more options, Lizard & Spock. Written in Java, program was able to allow multiple local players to connect to a local server and play against each other in the game. Utilized multi-threading for server and player communication and used logic to decide a winner of 2 out 3 games. Scores were kept for each individual player and a scoreboard can be seen displaying the top 3 players inside the waiting room screen. Used JavaFX and CSS to create most of the graphical user interfaces."
            projectLang="Java 8; CSS"
            />

            <ProjectsComp
            projectName="Baccarat Card Game"
            projectDescription="Built the Baccarat card game in Java using IntelliJ. Created a graphical user interface using JavaFX that allowed the user to bet any amount and choose different options to bet on."
            projectLang="Java 8; CSS"
            />

            <ProjectsComp
            projectName="Tic Tac Toe"
            projectDescription="Created the Tic Tac Toe game in Java using server sockets, multi-threading, and the min max algorithm to act as an AI to play against. The AI has 3 difficulty options and uses the Min Max algorithm to choose the best spots to pick, based on the difficulty and the clients play choice. Using Java FX, we created several GUIs for the client to represent a waiting, play, and result scene. We also made a GUI for the server with a list view to keep track of every thread connected to it and each thread's actions. Used CSS to edit different aspects of each GUI."
            projectLang="Java 8; CSS"
            />

            <ProjectsComp
            projectName="Personal Website"
            projectDescription="Developing a personal website to expand my knowledge in HTML and CSS. Using React framework for the base of the website."
            projectLang="HTML; CSS; React Framework"
            />

            </Cell>
            </Grid>
            </div>

        )
    }
}

export default Projects;
