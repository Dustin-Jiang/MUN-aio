import { Typography, Grid, ListItem, ListItemText, ListItemIcon, List } from '@material-ui/core';
import { Description } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
  Icon: {
    marginRight: theme.spacing(2),
  }
}));

function generatePermission() {
  const classes = style()
  const fileList = [
    "关于xxx.docx"
  ]
  var userPermissions = []
  for (var i in fileList) {
    userPermissions.push(
      <ListItem button key={fileList[i]}>
        <ListItemIcon>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            <Description class={classes.marginRight}/>
            <ListItemText primary={fileList[i]} />
          </Grid>
        </ListItemIcon>
      </ListItem>
    );
  }

  return userPermissions;
}

function FileList() {
  var classes = style();
  var userPermissions = generatePermission();

  return (
    <List>
      { userPermissions }
    </List>
  )
}
export default FileList;