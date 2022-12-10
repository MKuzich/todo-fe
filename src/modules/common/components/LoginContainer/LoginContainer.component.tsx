import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Stack, TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import { IUserLogin } from '../../types/user.types';
import { ROUTER_KEYS } from '../../consts/app-keys.const';
import { useLoginUser } from '../../../hooks/useLoginUser';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const LoginContainer: React.FC = () => {
  const { mutateAsync, isSuccess } = useLoginUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTER_KEYS.ROOT);
    }
  }, [isSuccess]);

  const initialValues: IUserLogin = { email: '', password: '' };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: IUserLogin) => {
      mutateAsync(values);
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
            Log In
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
