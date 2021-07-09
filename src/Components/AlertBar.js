import React, { Component } from "react";

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

class AlertBar extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children;

    this.variantIcon = {
      success: CheckCircleIcon,
      warning: WarningIcon,
      error: ErrorIcon,
      info: InfoIcon,
    };
    
    this.state = {
      open: true,
      autoHideDuration: 6000,
      vertical: 'top',
      horizontal: 'right',
      type: (props.type == null) ? 'info' : props.type
    };
  }

  handleClose = (e) => {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: this.state.vertical,
          horizontal: this.state.horizontal,
        }}
        open={this.state.open}
        message={this.children}
        key={this.state.vertical + this.state.horizontal}
        autoHideDuration={this.state.autoHideDuration}
        onClose={this.handleClose}
      />
    );
  }
}

export default AlertBar;