import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({

  container: {
    width: "100%",
    alignContent: "center",
    boxSizing: "border-box",

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
  textFieldLong: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  dense: {
    marginTop: 19,
  },
  button: {
    verticalAlign: "bottom",
    marginBottom: "8px"
  },
}));

function InputHeader() {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="idea-name"
        label="Idea Name"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="idea-desc"
        label="Description"
        className={classes.textFieldLong}

        margin="normal"
      />
      <TextField
        id="idea-author"
        label="Author"
        className={classes.textField}
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        className={classes.button}>
        Add
      </Button>


    </form>
  );

}

export default InputHeader;