import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Hidden, Typography } from '@material-ui/core';
import Notification from './Notification';
import Permission from './Permission';
import User from './User';
import AlertBar from '../Components/AlertBar';

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
      width: "100%",
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

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Hidden smDown>
        <AlertBar>
          Lorem ipsum
        </AlertBar>
        <Grid container
          direction="row"
          justify="center"
          className={classes.root}>
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
      </Hidden>
      <Hidden mdUp>
        <AlertBar>
          Lorem ipsum
        </AlertBar>
        <Grid container
          direction="row"
          justify="center"
          className={classes.rootMobile}>
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
      </Hidden>
    </div>
  );
}

export default Home;