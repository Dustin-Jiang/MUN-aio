import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LaptopWindows } from '@material-ui/icons';
import Notification from '../Home/Notification';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    '& > * > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      width: theme.spacing(48),
    },
    overflowX: 'auto',
    overflowY: 'hidden',
    justifyContent: 'left',
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
  paper: {
    height: "80%",
    overflowY: "auto",
  },
  fullHeight: {
    height: "var(--fullHeight)",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "0",
    padding: "0",
  },
  flexFirstItem: {
    height: "auto",
    margin: "0",
    padding: "0",
  },
  flexLastItem: {
    height: "inherit",
    margin: "0",
    padding: "0",
  }
}));

function CommandList() {
  var fullHeight = document.getElementById("fullHeight");

  // window.addEventListener("load", () => {
  //   fullHeight.style.setProperty("--fullHeight", document.getElementsByTagName("body")[0].offsetHeight - document.getElementsByTagName("header")[0].offsetHeight);
  // });

  // window.addEventListener("resize", () => {
  //   fullHeight.style.setProperty("--fullHeight", document.getElementsByTagName("body")[0].offsetHeight - document.getElementsByTagName("header")[0].offsetHeight);
  // });

  const classes = useStyles();

  document.getElementById("root").style.overflowY = "hidden";

  return (
    <div className={classes.fullHeight} id="fullHeight">
      <Grid container
        direction="row"
        justify="left"
        alignItems="start"
        className={classes.root}>
        <div>
          <Paper>
            <Typography variant="caption">
              待处理
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Notification/>
          </Paper>
        </div>
        <div>
          <Paper>
            <Typography variant="caption">
              正在处理
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Notification />
          </Paper>
        </div>
        <div>
          <Paper>
            <Typography variant="caption">
              已生效
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Notification />
          </Paper>
        </div>
      </Grid>
    </div>
  );
}

export default CommandList;