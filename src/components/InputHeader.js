import React, { Component, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({

  container: {
    maxWidth:1000,
    alignContent: "center",
    boxSizing: "border-box",

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxWidth: 150,
  },
  textFieldLong: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 300,
  },
  dense: {
    marginTop: 19,
  },
  button: {
    verticalAlign: "bottom",
    marginBottom: "8px"
  },
}));

const InputHeader = () => {
  const classes = useStyles();

  const [isDescriptionFilled, enableAdd] = useState(
    false
  );

  const onDescriptionChange = event => enableAdd(event.target.value);

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
        onChange={onDescriptionChange}
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
        disabled = {!isDescriptionFilled}
        variant="contained"
        color="primary"
        className={classes.button}>
        Add
      </Button>


    </form>
  );

}

export default InputHeader;