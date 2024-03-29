import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import md5 from "blueimp-md5";
import API from "./util/Api";
import {
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import Auth from "./util/Auth";
import { Redirect, useHistory } from 'react-router-dom';
import AlertBar from "./Components/AlertBar";


const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginTop: "110px",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
    marginBottom: 110,
  },
  paper: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  link: {
    marginTop: "20px",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  captchaContainer: {
    display: "flex",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  captchaPlaceholder: {
    width: 200,
  },
  buttonContainer: {
    display: "flex",
  },
  authnLink: {
    textAlign: "center",
    marginTop: 16,
  },
}));

function BackToHome(props) {
  const history = useHistory();
  if (Auth.GetUser() !== null) {
    history.push("/");
    return(
      <Redirect to="/"/>
    )
  } else return props.children;
}

function Login() {
  const classes = useStyles();
  const history = useHistory();

  const setConference = (conferenceID) => {
    API.get('/conference/' + conferenceID).then((response) => {
      const result = response.rawData;
      Auth.setConference(result);
      history.push("/");
    }).catch((error) => {
      if (error.response) {
        console.log(error);
      }
    });
  }

  const loginValidate = (e) => {
    e.preventDefault();
    API.get('/login/' + email + '/' + md5(pwd))
      .then((response) => {
        const result = response.rawData;
        if (response.status === 200 || response.status === 304) {
          if (Auth.GetUser() === null) {
            Auth.authenticate(result["content"]);
            setConference(Auth.GetUser()["conference"]);
          } else {
            Auth.signout();
            Auth.authenticate(result["content"]);
            setConference(Auth.GetUser()["conference"]);
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 403) {
            setOpen(false);
            setOpen(true);
          }
        }
      });
  };

  const stopRedirect = (e) => {
    e.preventDefault();
  };

  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <BackToHome>
      {
        open &&
        <AlertBar open={open} type="error">
          用户名或密码错误
        </AlertBar>
      }
      
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          登录 MUN AIO
      </Typography>
        <form className={classes.form} onSubmit={stopRedirect}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">
              电子邮箱
            </InputLabel>
            <Input
              id="email"
              type="email"
              name="email"
              onChange={(e) =>
                setEmail(e.target.value)
              }
              autoComplete="true"
              autoFocus={true}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">
              密码
            </InputLabel>
            <Input
              name="password"
              onChange={(e) => setPwd(e.target.value)}
              type="password"
              id="password"
              autoComplete="true"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginValidate}
          >
            登录
          </Button>
        </form>
      </Paper>
    </BackToHome>);
}

export default Login;