import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography, Grid } from '@material-ui/core';
import { Description } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  TopFile: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    marginRight: theme.spacing(2),
  },
  TopFileIcon: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  }
}));

function RecentFile() {
  const classes = useStyles();
  return (
    <Grid container
      direction="row"
      alignItems="center"
      wrap="nowrap">
      <IconButton className={classes.TopFile} color="primary">
        <Description className={classes.TopFileIcon} />
      </IconButton>
      <div>
        <Typography variant="h6">
          关于大不列颠及北爱尔兰联合王国首相张伯伦被刺杀所作出的声明.docx
        </Typography>
      </div>
    </Grid>
  );
}

export default RecentFile;