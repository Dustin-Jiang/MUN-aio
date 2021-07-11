import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Assignment, ChatBubble, ExitToApp, FileCopy, Home, Notifications, Settings } from '@material-ui/icons';
import { Link as RouterLink, Route } from 'react-router-dom';

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function CommandBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const linkTable = {
    files: <ListItemLink primary="文件" to="/file" icon={<FileCopy />}/>,
    news: <ListItemLink primary="新闻" to="/news" icon={<ChatBubble />} />,
    checkCommand: <ListItemLink primary="指令单" to="/commandlist" icon={<Assignment />} />,
    notification: <ListItemLink icon={<Notifications />} primary="通知" to="/notification" />
  }

  var enabledFunction = []

  if (localStorage.getItem("isAuthenticated")) {
    var functionsNeed = JSON.parse(localStorage.getItem("conference"))["functions"];
    for (var i in functionsNeed) {
      enabledFunction.push(linkTable[functionsNeed[i]]);
    }
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItemLink
          primary="主页"
          to="/"
          icon={<Home />} />
      </List>
      <Divider />
      <List>
        { enabledFunction }
      </List>
      <Divider />
      <List>
        <ListItemLink
          icon={<Settings />}
          primary="设置"
          to="/settings" />
        <ListItemLink
          primary="退出"
          icon={<ExitToApp />}
          to="/exit" />
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const siteMap = {
    "/": "主页",
    "/file": "文件",
    "/commandlist": "指令单",
    "/notification": "通知",
    "/settings": "设置",
    "/login": "登录",
    "/news": "新闻"
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Route>
            {({ location }) => (
              <Typography variant="h6">{siteMap[location.pathname]} | MUN All in One</Typography>
            )}
          </Route>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
}

export default CommandBar;
