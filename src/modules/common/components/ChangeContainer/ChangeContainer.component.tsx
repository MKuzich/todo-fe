import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Stack, TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import { IPasswords } from '../../types/user.types';
import { ROUTER_KEYS } from '../../consts/app-keys.const';
import { useChangeUser } from '../../../hooks/useChangeUser';
import { useLogoutUser } from '../../../hooks/useLogoutUser';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  oldPassword: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  newPassword: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const ChangeContainer: React.FC = () => {
  const { mutateAsync } = useChangeUser();
  const { mutateAsync: logout, isSuccess } = useLogoutUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTER_KEYS.ROOT);
    }
  }, [isSuccess]);

  const initialValues: IPasswords = {
    email: '',
    oldPassword: '',
    newPassword: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: IPasswords) => {
      if (values.oldPassword === values.newPassword) {
        toast.warn(
          'Your passwords are equal! Please change new password for request!'
        );
        return;
      }
      mutateAsync(values);
    },
  });

  const onClickHandler = () => {
    logout();
  };

  return (
    <Stack alignItems="center" pt={20} spacing={6}>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          direction="column"
          spacing={4}
          minWidth={{ xs: 300, sm: 400, md: 600 }}
        >
          <Typography variant="h4" component="h1">
            Change password
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
            label="Old password"
            type="password"
            name="oldPassword"
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
            }
            helperText={formik.touched.oldPassword && formik.errors.oldPassword}
          />
          <TextField
            variant="outlined"
            label="New password"
            type="password"
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
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
      <Button variant="contained" type="button" onClick={onClickHandler}>
        Logout
      </Button>
    </Stack>
  );
};
