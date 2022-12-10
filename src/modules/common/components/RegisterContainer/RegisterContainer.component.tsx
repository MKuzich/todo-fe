import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Stack, TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import { IUserRegister } from '../../types/user.types';
import { ROUTER_KEYS } from '../../consts/app-keys.const';
import { useRegisterUser } from '../../../hooks/useRegisterUser';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const RegisterContainer: React.FC = () => {
  const { mutateAsync, isSuccess } = useRegisterUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTER_KEYS.ROOT);
    }
  }, [isSuccess]);

  const initialValues: IUserRegister = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: IUserRegister) => {
      if (values.confirmPassword !== values.password) {
        toast.warn('Your passwords are not equal!');
        return;
      }
      const { email, password } = values;
      mutateAsync({ email, password });
    },
  });

  return (
    <Stack alignItems="center" pt={20}>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          direction="column"
          spacing={4}
          minWidth={{ xs: 300, sm: 400, md: 600 }}
        >
          <Typography variant="h4" component="h1">
            Sign Up
          </Typography>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            variant="outlined"
            label="Confirm password"
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <Stack direction="row" justifyContent="space-between">
            <Button
              variant="outlined"
              component={Link}
              to={ROUTER_KEYS.WELCOME}
            >
              Back
            </Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};
