import {
  Grid, 
  Paper, 
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ListContent from './ListContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      width: theme.spacing(96),
    },
    justifyContent: 'center',
  },
  rootMobile: {
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

function CommandList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.root.paper}>
        <Typography variant="caption">
          待处理
        </Typography>
        <div><ListContent /></div>
      </Paper>
    </div>
  );
}

export default CommandList;