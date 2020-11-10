import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
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
import { getUsers } from './Utils/HttpUtils';

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
    const [user, setUser] = useState(null);
    const title = "Minh-Hong Nè!";

    useEffect(() => {
        async function getUser(){
          const response = await getUsers();
          console.log(response);
          setUser(response.data[0]);
        }
        getUser();
    }, []);
    console.log(user);
    return (
        <Router>
        <Switch>

        <div className={classes.background}>
            <div className={classes.content}>
                <Header sections={sections} title= {title}/>
                {user != null 
                ? <Route exact={true} path="/" render={
                    (props) => <Resume {...props} userId={user.id}/>
                  } />
                : null}
                <Route path="/coverletter" component={CoverLetter}/>
            </div>
        </div>
        </Switch>
        </Router>
    );
}
