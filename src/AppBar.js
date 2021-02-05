import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Assignment, ChatBubble, ExitToApp, FileCopy, Notifications, Settings } from '@material-ui/icons';

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

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key="文件">
          <ListItemIcon>
            <FileCopy/>
          </ListItemIcon> 
          <ListItemText>
            文件
          </ListItemText>
        </ListItem>
        <ListItem button key="新闻">
          <ListItemIcon>
            <ChatBubble />
          </ListItemIcon>
          <ListItemText>
            新闻
          </ListItemText>
        </ListItem>
        <ListItem button key="指令单">
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText>
            指令单
          </ListItemText>
        </ListItem>
        <ListItem button key="通知">
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText>
            通知
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="设置">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText>
            设置
          </ListItemText>
        </ListItem>
        <ListItem button key="退出">
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText>
            退出
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

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
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            主页 | MUN All in One
          </Typography>
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

CommandBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default CommandBar;
