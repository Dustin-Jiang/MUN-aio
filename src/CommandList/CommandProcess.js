import { 
  Typography,
  Card,
  CardContent,
  makeStyles,
  Chip
 } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    marginRight: theme.spacing(2),
    flexShrink: 0,
    scrollSnapAlign: 'start',
    "&:last-child": {
      marginRight: 0,
    }
  },
  CommandSheetsContainer: {
    display: 'flex',
    overflowX: 'auto',
    padding: '3px 2px',
    scrollSnapType: 'x mandatory',
    scrollPadding: '2px',
  },
  CommandSheets: {
    marginTop: theme.spacing(1),
    width: theme.spacing(32),
    flexShrink: 0,
    textAlign: "left",
    borderRadius: "4px",
    "& > *": {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      width: "100%",
    }
  },
  CommandSenderInfo: {
    "& > *": {
      marginRight: theme.spacing(1),
    }
  },
  CommandMainText: {
    "& > div": {
      display: 'flex',
      alignItems: "center",
      paddingTop: theme.spacing(1),
    },
    "& > div > :first-child": {
      marginRight: theme.spacing(2),
      color: theme.palette.grey[600],
      width: theme.spacing(10),
      flexShrink: 0,
      alignItems: 'top'
    }
  },
  CommandReceiver: {
    marginRight: theme.spacing(1),
  },
  CommandReceiverContainer: {
    overflowX: "auto",
    display: 'flex',
    flexWrap: 'nowrap',
  },
  nowChecker: {
    marginTop: theme.spacing(1),
  }
}));

function CommandSheetsInProcess(props) {
  const classes = useStyles();

  return(
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.CommandSenderInfo}>
          <Typography variant="caption">
            中文特殊委员会
          </Typography>
          <Typography variant="caption">
            荷兰
          </Typography>
          <Typography variant="caption">
            陈南澄
          </Typography>
        </div>
        <Typography variant="h5">
          荷兰王国 | 指令单编号1.1
        </Typography>
        <Chip label="张静璇" size="small" color="primary" variant="outline" className={classes.nowChecker} icon={<AccountCircle/>}/>
      </CardContent>
    </Card>
  )
}

function CommandProcess() {
  const classes = useStyles();

  return(
    <div className={classes.CommandSheetsContainer}>
      <CommandSheetsInProcess/>
      <CommandSheetsInProcess/>
      <CommandSheetsInProcess/>
    </div>
  )
}

export default CommandProcess;