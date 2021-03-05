import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Hidden, Typography } from '@material-ui/core';
import RecentFile from './RecentFile';
import FileList from './FileList';

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

function PageFile() {
  const classes = useStyles();

  return (
    <Hidden smDown>
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
            <RecentFile/>
          </Paper>
        </div>
        <div>
          <Paper className={classes.noPadding}>
            <Typography variant="h6" className={classes.noPaddingFix}>
              文件列表
            </Typography>
            <FileList/>
          </Paper>
        </div>
      </Grid>
    </Hidden>
  );
}

export default PageFile;