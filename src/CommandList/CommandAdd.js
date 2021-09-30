import React from 'react';
import {
  makeStyles,
  Fab,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  CircularProgress,
  TextField,
  DialogContentText,
  FormControl,
} from '@material-ui/core';
import {
  Add
} from '@material-ui/icons';
import Auth from "../util/Auth";
import API from "../util/Api";

const useStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: "0px",
    right: "0px",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

function CommandAdd() {
  const classes = useStyle();
  const hasPermissionToSendCommand = Auth.GetPermission("command");
  const [open, setOpen] = React.useState(false);
  const [command, setCommand] = React.useState({
    target: [],
    purpose: "",
    details: "",
    error: "",
  });

  const handleTargetChange = (e) => {
    setCommand({
      ...command,
      target: e.target.value.split(" "),
    });
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = (e, ...more) => {
    // if submits
    if(more[0] === true) {
      for (var i in command) {
        if (i === "error") break;
        if (command[i] === "" || command[i] === []) {
          setCommand({
            ...command,
            error: i
          });
          return;
        }
      }
      var commandTarget = command.target.join("@");
      API.get("/commandList/add/" + Auth.GetUser()["id"] + "/" + commandTarget + "/" + command.purpose + "/" + command.details)
        .then((response) => {
          if (response.status === 200 || response.status === 304) {
            console.log(response.status);
            setOpen(false);
          }
          else {
            throw response.status;
          }
        }).catch((err) => {
          if(err) throw err;
        })
      console.log(command);
      return ;
    }
    setOpen(false);
  }

  return (
    <div>
      <div className={classes.fab}>
        {
          hasPermissionToSendCommand &&
          <Fab onClick={handleOpen} color="secondary">
            <Add />
          </Fab>
        }
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          新建指令单
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            输入指令单具体内容
          </DialogContentText>
          <FormControl margin="dense" required fullWidth>
            <TextField
              label="指令发向"
              fullWidth
              required
              helperText="空格分隔多个目标"
              onChange={(e) => handleTargetChange(e)}
              error={(command.error === "target")}/>
          </FormControl>
          <FormControl margin="dense" required fullWidth>
            <TextField
              label="指令目的"
              fullWidth
              required
              error={(command.error === "purpose")}
              onChange={(e) => setCommand({
                ...command,
                purpose: e.target.value,
              })} />
          </FormControl>
          <FormControl margin="dense" required fullWidth>
            <TextField
              label="指令细节"
              rows={3}
              multiline
              fullWidth
              required
              error={(command.error === "details")}
              onChange={(e) => setCommand({
                ...command,
                details: e.target.value,
              })} />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => handleClose(e, true)} color="primary" name="submit">提交</Button>
          <Button onClick={handleClose}>取消</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CommandAdd;