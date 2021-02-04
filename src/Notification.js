import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  Notification: {
    marginTop: theme.spacing(1),
    width: "100%",
    textAlign: "left",
  },
  NotificationBox: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: "100%",
  },
  NotificationTop: {
    color: "#afafaf",
    fontSize: 12,
  },
  NotificationTitle: {
    fontSize: 16,
  },
  NotificationContext: {
    color: "#6c6c6c",
    fontSize: 14,
  }
}));

function App() {
  const classes = useStyles()
  var notificationList = []
  for (var i=0; i<15; i++) {
    notificationList.push(
      <ButtonBase className={classes.Notification}>
        <Paper className={classes.NotificationBox}>
          <Typography className={classes.NotificationTop}>
            会场状态更新
        </Typography>
          <Typography className={classes.NotificationTitle}>
            大不列颠及北爱尔兰联合王国
        </Typography>
          <Typography className={classes.NotificationContext}>
            首相张伯伦被刺杀
        </Typography>
        </Paper>
      </ButtonBase>
    )
  }

  return (
    <div>
      {notificationList}
    </div>
  );
}

export default App;