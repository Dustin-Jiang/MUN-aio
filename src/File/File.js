import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Hidden, Typography } from '@material-ui/core';

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
              Recent File
            </Typography>
          </Paper>
        </div>
        <div>
          <Paper>
            <Typography variant="h6">
              File List
            </Typography>
          </Paper>
        </div>
      </Grid>
    </Hidden>
  );
}

export default PageFile;