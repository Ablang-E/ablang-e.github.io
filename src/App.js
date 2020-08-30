import React from 'react';
import './App.css';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}}
          to="/">My Portfolio</Link>} scroll>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}}
          to="/">Home Page</Link>} scroll>
            <Navigation>
            <Link to="/aboutme">CS 428 Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
