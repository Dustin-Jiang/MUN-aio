import React, { Component } from "react";
import PropTypes from "prop-types";

import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";

import {
  withStyles,
  SnackbarContent,
  Snackbar,
  IconButton,
  makeStyles
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  success: {
    backgroundColor: theme.palette.success.main,
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.info.main,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
}));

function AlertBar({children}, props){
  const classes = styles();

  const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };

  const state = {
    open: true,
    autoHideDuration: 6000,
    vertical: 'top',
    horizontal: 'right',
    type: (props.type == null) ? 'info' : props.type
  };

  const {open, autoHideDuration, vertical, horizontal, type} = state;

  return(
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      message={children}
      key={vertical + horizontal}
      className={classes[type]}
      autoHideDuration={autoHideDuration}
    />
  )
}

export default AlertBar;