import React from 'react'
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    width: '50%'
  },
  Avatar: {
    margin: '10rem, 0rem, 10rem, 0rem !important',
  },
  h1: {
    margin: theme.spacing(10, 10, 10, 10),
  },
  backBtn: {
    float: 'left',
    margin: theme.spacing(10, 10, 10, 10),
  },
  makeMargin: {
    lineHeight: '2.334'
  }
}));

export default function Login() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <AccountCircle className={classes.AccountCircle} />
        </Avatar>
        <Typography
          component="h1"
          className={classes.makeMargin}
          variant="h5">*Your Name*
        </Typography>
        <Typography
          component="h1"
          className={classes.makeMargin}
          variant="h5">*Your Email*
        </Typography>
        <form className={classes.form} noValidate>
          <Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>Back
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}>Log Out
          </Button>
          </Box>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
