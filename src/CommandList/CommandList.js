import {
  Grid,
  Hidden,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CommandFinish from './CommandFinish';
import CommandProcess from './CommandProcess';
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
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
    },
    width: "100%",
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
  return (
    <div>
      <Hidden smDown>
        <CommandListContent mobile={false}/>
      </Hidden>
      <Hidden mdUp>
        <CommandListContent mobile={true}/>
      </Hidden>
    </div>
  );
}

function CommandListContent(props) {
  const classes = useStyles();

  if (props.mobile) {
    var rootClass = classes.rootMobile;
  } else {
    var rootClass = classes.root;
  }
  return (
    <div className={rootClass}>
      <Paper className={rootClass.paper}>
        <Typography variant="caption">
          待处理
        </Typography>
        <div>
          <ListContent />
        </div>
      </Paper>
      <Paper className={rootClass.paper}>
        <Typography variant="caption">
          正在处理
        </Typography>
        <div>
          <CommandProcess />
        </div>
      </Paper>
      <Paper className={rootClass.paper}>
        <Typography variant="caption">
          已完成
        </Typography>
        <CommandFinish/>
      </Paper>
    </div>
  )
}

export default CommandList;