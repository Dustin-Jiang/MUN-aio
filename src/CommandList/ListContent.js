import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import CommandSheets from './CommandSheets';

const useStyles = makeStyles((theme) => ({
  CommandSheetsContainer: {
    display: 'flex',
    overflowX: 'auto',
    padding: '3px 2px',
    scrollSnapType: 'x mandatory',
    scrollPadding: '2px',
  },
}));

function ListContent(props) {
  const classes = useStyles();

  return (
    <div className={classes.CommandSheetsContainer}>
      <CommandSheets name="1" />
      <CommandSheets name="2" />
      <CommandSheets name="3" />
    </div>
  );
}

export default ListContent;