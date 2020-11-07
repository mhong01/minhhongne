import React, {Component, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useWindowDimension from '../ResizeWindow';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 500,
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
  }));

export default function DisplayPhoto(){
    const classes = useStyles();
    const { width, height} = useWindowDimension();
    const imgURL = 'https://scontent.fcxh3-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/123001207_2402268429897970_9108994820798525792_n.jpg?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=tgUuC6vyfwAAX9aiFUY&_nc_ht=scontent.fcxh3-1.fna&tp=6&oh=7cc781e643a9fb934fe546cbde1283a0&oe=5FCA2881';
    const summary = 'Experienced Software Engineer who quickly adapts to change and closely collaborates with software architects and seniors to develop software solutions. Aims for company products\' success, assists team members in need, and be a fantastic self-learner.'
    return (
        <div>
        { width > 1000
            ?<Card className={classes.root}>
               <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={imgURL}
                        title="MHL"/>
                    <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" >
                        {summary}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            :<div><Avatar alt="MHL" src={imgURL} style={{margin:'auto'}} className={classes.large}></Avatar>
            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'center'}}>
                {summary}
            </Typography>
            </div>
        }
        </div>
    );
}