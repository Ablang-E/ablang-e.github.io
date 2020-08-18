import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'
import contactPic from './front-img.png';


class Contact extends Component {
    render() {
        return(
            <div className = "contact-body">
            <Grid className = "contact-grid">
                <Cell col={6}>
                    <h2>Eric Ablang</h2>
                    <img
                    src = {contactPic}
                    alt = "contactPic"
                    className = "contactPic"
                    />

                </Cell>

                <Cell col={6}>
                    <h2>Contact Me!</h2>
                    <hr/>
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (847) 431-7513
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                ablange.eric@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-link" aria-hidden="true"/>
                                www.linkedin.com/in/eric-ablang
                            </ListItemContent>
                        </ListItem>
                    </List>
                </Cell>
            </Grid>

            </div>
        )
    }
}

export default Contact;
