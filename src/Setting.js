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
  CircularProgress,
} from '@material-ui/core';
import { Email, KeyboardArrowRight, Lock } from '@material-ui/icons';
import React from 'react';
import Auth from './util/Auth';
import API from './util/Api';
import md5 from 'blueimp-md5';
import AlertBar from './Components/AlertBar';

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
  },
  buttonProgress: {
    height: "24.5px !important",
    width: "24.5px !important",
  }
}));

function Setting() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    emailDialog: {
      open: false,
      error: false,
      loading: false,
    },
    passwordDialog: {
      open: false,
      errorColumn: 0,
      loading: false,
    },
  });

  const [snackBar, setSnackBar] = React.useState({
    success: false,
    failed: false,
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
          console.log(email)
          setState({
            ...state,
            emailDialog: {
              ...state.emailDialog,
              open: true,
              error: false,
              loading: true,
            }
          });
          API.get("/settings/" + Auth.GetUser()["id"] + "/changeEmail/" + email)
          .then((response) => {
            if (response.status === 200 || response.status === 304) {
              setState({
                ...state,
                emailDialog: {
                  ...state.emailDialog,
                  open: false,
                  loading: false,
                }
              });
              setSnackBar({
                success: true,
                ...snackBar
              });
              setSnackBar({
                success: false,
                ...snackBar
              });
              Auth.signout();
              window.location.href("/login");
            }
          }).catch((err) => {
            console.log(err);
            setSnackBar({
              success: false,
              failed: true,
            });
            setSnackBar({
              success: false,
              failed: false,
            })
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
        setEmail("");
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
        else {
          setState({
            ...state,
            passwordDialog: {
              ...state.passwordDialog,
              loading: true,
            }
          })
          API.get('/settings/' + Auth.GetUser()["id"] + '/changePassword/' + md5(pwd["old"]) + '/' + md5(pwd["new"]))
          .then((response) => {
            if (response.status === 200 || response.status === 304) {
              setState({
                ...state,
                passwordDialog: {
                  ...state.passwordDialog,
                  loading: false,
                }
              });
              setSnackBar({
                success: true,
                failed: false,
              });
              setSnackBar({
                success: false,
                failed: false,
              });
              handleClose.passwordDialog();
              Auth.signout();
              window.location.href("/login");
            }
          }).catch((err) => {
            console.log(err);
            setState({
              ...state,
              passwordDialog: {
                ...state.passwordDialog,
                open: true,
                loading: false,
              }
            });
            setSnackBar({
              success: false,
              failed: true,
            });
            setSnackBar({
              success: false,
              failed: false,
            });
          })
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
      {snackBar.success && <AlertBar type="success" open={snackBar.success}>操作成功</AlertBar>}
      {snackBar.failed && <AlertBar type="error" open={snackBar.failed}>操作失败</AlertBar>}
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
            {
              state.emailDialog.loading ? <CircularProgress className={classes.buttonProgress}/> : "确认"
            }
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
          <Button onClick={(e) => handleClose.passwordDialog(e, true)} name="submit" disabled={state.passwordDialog.loading}>
            {
              state.passwordDialog.loading ? <CircularProgress className={classes.buttonProgress}/> : "确认"
            }
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