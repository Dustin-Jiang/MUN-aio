import {
  makeStyles,
  Typography,
  List,
  ListItem,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  DialogContentText,
  FormControl,
} from '@material-ui/core';
import { Email, KeyboardArrowRight, Lock, PermDataSetting } from '@material-ui/icons';
import React from 'react';
import Auth from './util/Auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    flexWrap: 'wrap',
    alignItems: "center",
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(64),
    },
    padding: theme.spacing(2),
    height: "100%",
  },
  Icon: {
    color: theme.palette.grey[600],
    marginRight: theme.spacing(2),
  },
  RightIndicator: {
    marginLeft: 'auto',
    color: theme.palette.grey[600],
    display: "flex",
  }
}));

function Setting() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    emailDialog: {
      open: false,
      error: false,
    },
    passwordDialog: {
      open: false,
      errorColumn: 0,
    },
  });

  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState({
    old: "",
    new: "",
    newConfirm:  "",
  });

  const handleClose = {
    emailDialog(e, ...more) {
      if(more[0] === true) {
        var RegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/gi;
        if (! RegExp.test(email)) {
          setState({
            ...state,
            emailDialog: {
              ...state.emailDialog,
              error: true,
            }
          })
        }
        else {
          console.log(email);
          setState({
            ...state,
            emailState: {
              ...state.emailDialog,
              open: false,
              error: false,
            }
          })
        }
      }
      else {
        setState({
          ...state,
          emailDialog: {
            error: false,
            open: false,
          },
        });
      }
    },
    passwordDialog(e, ...more) {
      if (more[0] === true) {
        for (var i in pwd){
          if (pwd[i] === "") {
            setState({
              ...state,
              passwordDialog: {
                open: true,
                errorColumn: i,
              }
            });
            return ;
          }
        }
        if (pwd["new"] != pwd["newConfirm"]) {
          setState({
            ...state,
            passwordDialog: {
              ...state.passwordDialog,
              errorColumn: "newConfirm"
            }
          })
          return ;
        }
      }
      else {
        setState({
          ...state,
          passwordDialog: {
            errorColumn: "",
            open: false,
          },
        })
        setPwd({
          new: "",
          newConfirm: "",
          old: "",
        })
      }
    }
  }

  const handleOpen = {
    emailDialog() {
      setState({
        ...state,
        emailDialog: {
          ...state.emailDialog,
          open: true,
        },
      })
    },
    passwordDialog() {
      setState({
        ...state,
        passwordDialog: {
          ...state.passwordDialog,
          open: true,
        },
      });
    }
  }

  return (
    <div className={classes.root}>
      <Typography variant="subtitle2">
        安全
      </Typography>
      <Paper>
        <List>
          <ListItem button onClick={handleOpen.emailDialog}>
            <Email className={classes.Icon}/>
            <Typography variant="subtitle1">
              邮箱
            </Typography>
            <div className={classes.RightIndicator}>
              <Typography>
                {Auth.GetUser()["email"]}
              </Typography>
              <KeyboardArrowRight className={classes.RightIndicator} />
            </div>
          </ListItem>
          <ListItem button onClick={handleOpen.passwordDialog}>
            <Lock className={classes.Icon} />
            <Typography variant="subtitle1">
              密码
            </Typography>
            <KeyboardArrowRight className={classes.RightIndicator} />
          </ListItem>
        </List>
      </Paper>

      {/* Dialogs */}
      <Dialog open={state.emailDialog.open} onClose={handleClose.emailDialog}>
        <DialogTitle>
          修改邮箱
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            输入您的常用邮箱以替换登录邮箱
          </DialogContentText>
          <TextField
            label="邮箱地址"
            autoComplete="false"
            type="email"
            autoFocus
            error={state.emailDialog.error}
            helperText={(state.emailDialog.error) && "不是正确的邮箱地址"}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button name="submit" onClick={(e) => handleClose.emailDialog(e, true)}>
            确认
          </Button>
          <Button color="primary" onClick={handleClose.emailDialog}>
            取消
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={state.passwordDialog.open} onClose={handleClose.passwordDialog}>
        <DialogTitle>
          修改密码
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            输入原密码与新密码
          </DialogContentText>
          <FormControl required fullWidth margin="dense">
            <TextField
              label="原密码"
              autoComplete="true"
              type="password"
              autoFocus
              fullWidth
              required
              onChange={(e) => setPwd({...pwd, old: e.target.value})}
            />
          </FormControl>
          <FormControl required fullWidth margin="dense">
            <TextField
              label="新密码"
              autoComplete="false"
              type="password"
              fullWidth
              required
              value={pwd.new}
              onChange={(e) => setPwd({...pwd, new: e.target.value})}
              error={(state.passwordDialog.errorColumn == "new")}
              helperText={(state.passwordDialog.errorColumn == "new") && "必填项"}
            />
          </FormControl>
          <FormControl required fullWidth margin="dense">
            <TextField
              label="确认新密码"
              autoComplete="false"
              type="password"
              fullWidth
              required
              value={pwd.newConfirm}
              onChange={(e) => setPwd({...pwd, newConfirm: e.target.value})}
              error={(state.passwordDialog.errorColumn == "newConfirm")}
              helperText={(state.passwordDialog.errorColumn == "newConfirm") && "与之前输入密码不符"}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => handleClose.passwordDialog(e, true)} name="submit">
            确认
          </Button>
          <Button color="primary" onClick={handleClose.passwordDialog}>
            取消
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Setting;