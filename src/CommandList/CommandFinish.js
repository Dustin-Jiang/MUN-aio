import React from 'react';
import { 
  makeStyles,
  Card,
  CardContent,
  Typography,
  Chip,
} from '@material-ui/core';
import { 
  AccountCircle,
  Close,
  Done
} from '@material-ui/icons';

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

function CommandFinish(props) {
  const classes = useStyles();

  return(
    <div className={classes.CommandSheetsContainer}>
      <CommandSheetsFinish />
      <CommandSheetsFinish />
      <CommandSheetsFinish />
    </div>
  )
}

function CommandSheetsFinish(props) {
  const classes = useStyles();
  const chips = {
    success: <Chip label="通过" size="small" color="primary" className={classes.nowChecker} icon={<Done />} />,
    rejected: <Chip label="拒绝" size="small" color="secondary" className={classes.nowChecker} icon={<Close />} />
  }

  return (
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
        <div className={classes.CommandSenderInfo}>
          {
            chips["rejected"]
          }
          <Chip label="张静璇" size="small" color="primary" variant="outlined" className={classes.nowChecker} icon={<AccountCircle />} />
        </div>
      </CardContent>
    </Card>
  );
}

export default CommandFinish;