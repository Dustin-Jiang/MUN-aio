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
  CommandSheets: {
    marginTop: theme.spacing(1),
    width: "100%",
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
      width: theme.spacing(12),
      flexShrink: 0,
      alignItems: 'top'
    }
  },
  CommandReceiver: {
    marginRight: theme.spacing(1),
  },
}));

class ListContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CommandSheets />
    );
  }
}

function CommandSheets(props) {
  const classes = useStyles();

  return (
    <Card>
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
            <Chip label="荷兰通讯社" variant="outlined" color="primary" className={classes.CommandReceiver} />
            <Chip label="荷兰王国财政部" variant="outlined" color="primary" className={classes.CommandReceiver} />
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
      <CommandAction />
    </Card>
  );
}

function CommandAction(props) {
  const [open, setOpen] = React.useState(false);
  const [publicPublish, setPublicPublish] = React.useState(true);

  const handlePassClick = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handlePassClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const handlePublishChange = (switchState) => {
    setPublicPublish(!switchState);
  }

  return (
    <div>
      <CardActions>
        <Button variant="outlined" color="primary" onClick={handlePassClick}>通过</Button>
        <Button variant="outlined" color="secondary">不通过</Button>
      </CardActions>
      <Dialog open={open} onClose={handlePassClose}>
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
            id="name"
            label="推演结果"
            type="text"
            fullWidth
            multiline
            rows={3}
          />
          <FormControlLabel
            control={
              <Switch
                name="publicPublish"
                checked={publicPublish}
                onClick={()=>handlePublishChange(publicPublish)}
                color="primary"
              />
            }
            label="公开发布">
          </FormControlLabel>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePassClose} color="primary">
            提交
          </Button>
          <Button onClick={handlePassClose} color="primary">
            取消
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ListContent;