import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Hidden, Typography } from '@material-ui/core';
import Notification from './Notification';
import Permission from './Permission';
import User from './User';
import AlertBar from '../Components/AlertBar';
import Auth from '../util/Auth';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > * > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      width: theme.spacing(64),
    },
    height: "100%",
  },
  rootMobile: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > * > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
    },
    '& > *': {
      width: "100%",
    }
  },
  noPadding: {
    padding: 0,
  },
  noPaddingFix: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
}));

function HomeContent(props) { 
  const classes = useStyles();
  if (props.mobile) {
    var rootClass = classes.rootMobile;
    var alertBarPosition = "bottom";
  } else {
    var rootClass = classes.root;
    var alertBarPosition = "top";
  }

  return (
    <div>
      <AlertBar type="success" vertical={alertBarPosition}>
        欢迎回来, {Auth.GetUser()["name"]}
      </AlertBar>
      <Grid container
        direction="row"
        justify="center"
        className={rootClass}>
        <div>
          <Paper>
            <User />
          </Paper>
          <Paper className={classes.noPadding}>
            <Typography variant="h6" className={classes.noPaddingFix}>
              权限
              </Typography>
            <Permission />
          </Paper>
        </div>
        <div>
          <Paper>
            <Typography variant="h6">
              通知
              </Typography>
            <Notification />
          </Paper>
        </div>
      </Grid>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Hidden smDown>
        <HomeContent mobile={false}/>
      </Hidden>
      <Hidden mdUp>
        <HomeContent mobile={true}/>
      </Hidden>
    </div>
  );
}

export default Home;