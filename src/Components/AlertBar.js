import React, { Component } from "react";

import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";

import classNames from "classnames";

import {
  withStyles,
  SnackbarContent,
  Snackbar,
  IconButton,
  Icon
} from "@material-ui/core";

const styles = (theme) => ({
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
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
});

class AlertBarComponent extends React.Component {
  constructor(props) {
    super(props);

    //To get styles
    this.classes = props["classes"];
    console.log(this.classes);

    // Use mother component's props as now props
    props = props["props"];
    console.log(props.children);

    this.state = {
      open: true,
      autoHideDuration: 6000,
      vertical: 'top',
      message: props.children,
      horizontal: 'right',
      type: (props.type == null) ? 'info' : props.type
    };

    this.variantIcon = {
      "success": <CheckCircleIcon className={this.classes.icon} />,
      "warning": <WarningIcon className={this.classes.icon} />,
      "error": <ErrorIcon className={this.classes.icon} />,
      "info": <InfoIcon className={this.classes.icon} />
    };
  }

  handleClose = (e) => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: this.state.vertical,
          horizontal: this.state.horizontal,
        }}
        open={this.state.open}
        key={this.state.vertical + this.state.horizontal}
        autoHideDuration={this.state.autoHideDuration}
        onClose={this.handleClose}
      >
        <SnackbarContent 
          className={this.classes[this.state.type]}
          message={
            <span id="client-snackbar" className={this.classes.message}>
              {this.variantIcon[this.state.type]}
              {this.state.message}
            </span>
          }
        />
      </Snackbar>
    );
  }
}

//To add classes to the Component, avoiding hook errors
const AlertBarComponentWithStyle = withStyles(styles)(AlertBarComponent);

class AlertBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AlertBarComponentWithStyle
        props={this.props}
      />
    );
  }
}

export default AlertBar;