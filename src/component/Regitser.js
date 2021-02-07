import React, { useEffect, useState } from 'react';
import {
  TextField,
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterAction } from '../redux/actions/auth.action';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: 'middle',
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(6),
  },
  signin: {
    margin: 'auto',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(6),
    color: theme.palette.link.dark,
    fontFamily: 'bold',
    fontSize: '20px',
    fontFamily: 'Raleway, Arial',
  },
}));

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const user = {
        firsrName: values.firstName || undefined,
        lastName: values.lastName || undefined,
        email: values.email || undefined,
        password: values.password || undefined,
      };
      dispatch(RegisterAction(user));
    },
  });

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='h4' className={classes.title}>
          Register User
        </Typography>
      </CardContent>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id='firstName'
          name='firstName'
          type='text'
          label='First Name'
          className={classes.textField}
          margin='normal'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <br />
        <TextField
          type='text'
          id='lastName'
          name='lastName'
          label='Last Name'
          className={classes.textField}
          margin='normal'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <br />
        <TextField
          type='text'
          id='email'
          name='email'
          label='Email'
          className={classes.textField}
          margin='normal'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br />
        <TextField
          type='password'
          id='password'
          name='password'
          label='Password'
          className={classes.textField}
          margin='normal'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <br />
        <TextField
          type='password'
          id='passwordConfirmation'
          name='passwordConfirmation'
          label='Confirm Password'
          className={classes.textField}
          margin='normal'
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          error={
            formik.touched.passwordConfirmation &&
            Boolean(formik.errors.passwordConfirmation)
          }
          helperText={
            formik.touched.passwordConfirmation &&
            formik.errors.passwordConfirmation
          }
        />
        <br />

        <Button
          color='primary'
          variant='contained'
          className={classes.submit}
          type='submit'
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};
export default Register;
