import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  }
}));

function CommandList() {
  const classes = useStyles();

  document.getElementById("root").style.overflowY = "hidden";

  return (
    <div>
      <Grid container
        direction="row"
        justify="center"
        alignItems="top"
        className={classes.root}>
        <div>
          <Paper>
            <Typography variant="h6">
              最新文件
              </Typography>
          </Paper>
        </div>
        <div>
          <Paper>
            <Typography variant="h6">
              文件列表
              </Typography>
          </Paper>
        </div>
        <div>
          <Paper>
            <Typography variant="h6">
              文件列表
              </Typography>
          </Paper>
        </div>
      </Grid>
    </div>
  );
}

export default CommandList;