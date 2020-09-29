import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './CS428_Projects';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component = {LandingPage} />
        <Route path="/CS428_Projects" component = {About} />
        <Route path="/contact" component = {Contact} />
        <Route path="/resume" component = {Resume} />
        <Route path="/projects" component = {Projects} />
        <Route path="*" component={LandingPage} />

    </Switch>

);

export default Main;
