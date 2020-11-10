
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import DisplayPhoto from './DisplayPhoto';
import Experience from './Experience';
import ContactInfo from './ContactInfo';
import Awards from './Awards';
import Skills from './Skills';
import Education from './Education';
import useWindowDimensions from '../ResizeWindow';
import { useState, useEffect } from 'react';
import { getUser } from '../Utils/HttpUtils';


const useStyles = makeStyles((theme) =>({
  card: {
    paddingTop: '15px',
    margin:'10px',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    float:'right'
  },
  cardGrid: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  avatar:{
    margin:'auto',
    paddingBottom:theme.spacing(2),
  },
  cardGridSmall:{
    padding: theme.spacing(3),
    flexShrink: 1,
  },
  cardGridSmallContent:{
    margin:'auto',
    width: '100%',
    paddingBottom:theme.spacing(3),
  },
  textAlign: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
}));

// async function getUser(userId){
//   const response = await getUser(userId);
//   return response;
// }

export default function Resume(props) {
  const classes = useStyles();
  const {height, width} = useWindowDimensions();
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  console.log(props.userId);
  useEffect(() => {
    async function _getUser(){
      const response = await getUser(props.userId);
      setUser(response);
      setUserInfo(response);
    }
    _getUser();
  }, []);
  return (
    width > 1000 
      ? <Grid container spacing={4} className={classes.cardGrid}>
          <Grid item xs={3}>
            <DisplayPhoto/>
          </Grid>
          <Grid item xs={9} spacing= {2}>
          <ContactInfo/>
          <br/>
          <Skills/>
          <br/>
          <Experience/>
          <br/>
          <Awards/>
          <br/>
          <Education/>

          </Grid>
          </Grid>
        :
        <div>
        <div className={classes.avatar}><DisplayPhoto/></div>
        <Grid container spacing={0} className={classes.cardGridSmall}>
          <div className={classes.cardGridSmallContent}><ContactInfo/></div>
          <br/>
          <div className={classes.cardGridSmallContent}><Skills/></div>
          <br/>
          <div className={classes.cardGridSmallContent}><Experience/></div>
          <br/>
          <div className={classes.cardGridSmallContent}><Awards/></div>
          <br/>
          <div className={classes.cardGridSmallContent}><Education/></div>
        </Grid>
        </div>
  );
}

Resume.propTypes = {
  userId: PropTypes.object,
};
