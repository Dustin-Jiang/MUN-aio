import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle'
import { Grid, Typography } from '@material-ui/core';
import Notification from './Notification'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > * > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      width: theme.spacing(64),
    },
  },
  Avatar: {
    marginRight: theme.spacing(1),
    fontSize: '4rem',
  }
}));

function App() {
  const classes = useStyles()

  return (
    <Grid container
      direction="row"
      justify="center"
      alignItems="top"
      className={classes.root}>
      <div>
        <Paper>
          <Grid container
            direction="row"
            justify="left"
            alignItems="left">
            <AccountCircle fontSize="large"
              className={classes.Avatar} />
            <div>
              <Typography variant="h5">
                Dustin
            </Typography>
              <Typography variant="caption">
                MPC - Netherland
            </Typography>
            </div>
          </Grid>
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
  );
}

export default App;