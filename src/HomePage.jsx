import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Resume from './Resume/Resume';
import CoverLetter from './CoverLetter/CoverLetter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  background: {
      backgroundColor: '#fafafa'
  },
  content:{
      maxWidth:'1536px',
      margin: 'auto',
  }
}));

export default function HomePage(){
    const classes = useStyles();
    const sections = [
        { title: 'Resume', url: '/' },
        { title: 'Cover Letter', url: '/coverletter' },
        { title: 'About', url: '/about' },
      ];

    const title = "Minh-Hong Nè!";
    
    return (
        <Router>
        <Switch>

        <div className={classes.background}>
            <div className={classes.content}>
                <Header sections={sections} title= {title}/>
                <Route exact={true} path="/" component={Resume} />
                <Route path="/coverletter" component={CoverLetter}/>
            </div>
        </div>
        </Switch>
        </Router>
    );
}
