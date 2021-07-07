import { Grid, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import Auth from '../util/Auth';

const styles = makeStyles((theme) => ({
  Avatar: {
    marginRight: theme.spacing(1),
    fontSize: '4rem',
  },
}));

function User() {
  const classes = styles();
  return (
    <Grid container
      direction="row">
      <AccountCircle fontSize="large"
        className={classes.Avatar} />
      <div>
        <Typography variant="h5">
          { Auth.GetUser()['name'] }
        </Typography>
        <Typography variant="caption">
          中文常规委员会
        </Typography>
      </div>
    </Grid>
  );
}

export default User;