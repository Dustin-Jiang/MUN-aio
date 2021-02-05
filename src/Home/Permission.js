import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText, Grid } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { AssignmentTurnedIn, FileCopy, Note, Person } from '@material-ui/icons';

const style = makeStyles((theme) => ({
  Icon: {
    marginRight: theme.spacing(1),
  }
}));

function getPermission(){
  var permissions = [
    "DH",
    "news",
    "checkNews"
  ]
  return permissions;
}

function generatePermission(name) {
  const classes = style()

  const permissionList = {
    "news": {
      "icon": <ChatBubbleIcon className={classes.Icon} />,
      "text": "发布新闻"
    },
    "DH": {
      "icon": <Person className={classes.Icon} />,
      "text": "Dais Head"
    },
    "DM": {
      "icon": <Person className={classes.Icon} />,
      "text": "Dais Member"
    },
    "checkNews": {
      "icon": <AssignmentTurnedIn className={classes.Icon} />,
      "text": "审阅新闻稿件"
    },
    "checkCommand": {
      "icon": <AssignmentTurnedIn className={classes.Icon} />,
      "text": "审阅指令单"
    },
    "command": {
      "icon": <Note className={classes.Icon} />,
      "text": "发布指令单"
    },
    "file": {
      "icon": <FileCopy className={classes.Icon} />,
      "text": "发布文件"
    }
  }
  var userPermissions = []
  for (var i in name) {
    userPermissions.push(
      <ListItem button key={permissionList[name[i]]["text"]}>
        <ListItemIcon>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            {permissionList[name[i]]["icon"]}
            <ListItemText primary={permissionList[name[i]]["text"]} />
          </Grid>
        </ListItemIcon>
      </ListItem>
    );
  }

  return userPermissions;
}

function Permission() {
  var userPermissions = generatePermission(getPermission());

  return (
    <div>
      { userPermissions}
    </div>
  )
}

export default Permission;