import {
  Card,
  Typography,
  Chip,
  CardContent,
  Button,
  CardActions,
  Dialog,
  DialogContentText,
  DialogTitle,
  TextField,
  DialogActions,
  DialogContent,
  Switch,
  FormControlLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import Auth from '../util/Auth';

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
  }
}));

function CommandSheets(props) {
  const classes = useStyles();
  const hasPermissionToCheckCommand = Auth.GetPermission("checkCommand");
  var name = props.name;

  return (
    <Card name={name} className={classes.card}>
      <CardContent>
        <div className={classes.CommandSenderInfo}>
          <Typography variant="caption">
            中文常规委员会
        </Typography>
          <Typography variant="caption">
            荷兰
        </Typography>
          <Typography variant="caption">
            陈南澄
        </Typography>
        </div>
        <div className={classes.CommandMainText}>
          <Typography variant="h5">
            荷兰王国 | 指令单编号1.1
          </Typography>
          <div>
            <Typography>指令发向</Typography>
            <div className={classes.CommandReceiverContainer}>
              <Chip label="荷兰通讯社" variant="outlined" color="primary" className={classes.CommandReceiver} />
              <Chip label="荷兰王国财政部" variant="outlined" color="primary" className={classes.CommandReceiver} />
            </div>
          </div>
          <div>
            <Typography>指令目的</Typography>
            <Typography>将荷兰通讯社收归为国有官方通讯社</Typography>
          </div>
          <div>
            <Typography>指令细节</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta asperiores nihil suscipit eius, repellat rerum adipisci optio quos quis corporis voluptates ratione molestias quia nam sunt voluptatibus, facilis porro enim.
          </Typography>
          </div>
        </div>
      </CardContent>
      {
        hasPermissionToCheckCommand &&
        <CommandAction />
      }
    </Card>
  );
}

function CommandAction(props) {
  const [passOpen, setPassOpen] = React.useState(false);
  const [rejectOpen, setRejectOpen] = React.useState(false);
  const [publicPublish, setPublicPublish] = React.useState(true);
  const [result, setResult] = React.useState("");
  const [reason, setReason] = React.useState("");

  const handlePassClick = (e) => {
    e.preventDefault();
    setPassOpen(true);
  };

  const handleRejectClick = (e) => {
    e.preventDefault();
    setRejectOpen(true);
  };

  const handlePassClose = (e) => {
    e.preventDefault();
    if (e.target.parentElement.name === "submit") {
      console.log(result);
      console.log(publicPublish);
    };
    setPassOpen(false);
  };

  const handleRejectClose = (e) => {
    e.preventDefault();
    if (e.target.parentElement.name === "submit") {
      console.log(result);
      console.log(publicPublish);
    };
    setRejectOpen(false);
  };

  const handlePublishChange = (switchState) => {
    setPublicPublish(!switchState);
  };

  return (
    <div>
      <CardActions>
        <Button variant="outlined" color="primary" onClick={handlePassClick}>通过</Button>
        <Button variant="outlined" color="secondary" onClick={handleRejectClick}>拒绝</Button>
      </CardActions>
      <Dialog open={passOpen} onClose={handlePassClose}>
        <DialogTitle>
          通过这条指令?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            输入推演结果与公开类型
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="result"
            label="推演结果"
            type="text"
            fullWidth
            multiline
            rows={3}
            onChange={(e) => { setResult(e.target.value); }}
          />
          <FormControlLabel
            control={
              <Switch
                name="publicPublish"
                checked={publicPublish}
                onClick={() => handlePublishChange(publicPublish)}
                color="primary"
              />
            }
            label="公开发布">
          </FormControlLabel>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePassClose} color="primary" name="submit">
            提交
          </Button>
          <Button onClick={handlePassClose} color="primary" name="cancel">
            取消
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={rejectOpen} onClose={handleRejectClose}>
        <DialogTitle>
          拒绝这条指令?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            输入拒绝理由与意见
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="reason"
            label="拒绝理由与意见"
            type="text"
            fullWidth
            multiline
            rows={3}
            color="secondary"
            onChange={(e) => { setReason(e.target.value); }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRejectClose} color="primary" name="submit" color="secondary">
            提交
          </Button>
          <Button onClick={handleRejectClose} color="primary" name="cancel" color="secondary">
            取消
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CommandSheets;