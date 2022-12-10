import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useFormik } from 'formik';
import {
  Button,
  Paper,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  Stack,
} from '@mui/material';
import * as yup from 'yup';
import { Overlay } from './TodoModal.styled';
import { AddTodoType } from '../../types/todo.types';
import { useAddTodo } from '../../../hooks/useAddTodo';

const modalRoot = document.querySelector('#modal-root')!;

interface IProps {
  closeModal: () => void;
}

const validationSchema = yup.object({
  title: yup
    .string()
    .min(3, 'Title should be of minimum 3 characters length')
    .max(30, 'Title should be of maximum 30 characters length')
    .required('Title is required'),
  data: yup
    .string()
    .min(10, 'Description should be of minimum 10 characters length')
    .max(500, 'Description should be of maximum 500 characters length')
    .required('Description is required'),
});

export const TodoModal: React.FC<IProps> = ({ closeModal }) => {
  const [isPublic, setIsPublic] = useState(true);
  const mutation = useAddTodo();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const onTogglerClick = () => {
    setIsPublic(!isPublic);
  };

  const initialValues: Omit<AddTodoType, 'public'> = { title: '', data: '' };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: Omit<AddTodoType, 'public'>) => {
      mutation.mutate({ ...values, public: isPublic });
      closeModal();
    },
  });

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Paper>
        <Box py={{ xs: 2, sm: 4, md: 8 }} px={{ xs: 4, sm: 8, md: 12 }}>
          <form onSubmit={formik.handleSubmit}>
            <Stack
              direction="column"
              spacing={4}
              minWidth={{ xs: 300, sm: 400, md: 600 }}
              alignItems="start"
            >
              <Typography variant="h4" component="h2">
                Add new todo
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                label="Title"
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Description"
                type="text"
                name="data"
                value={formik.values.data}
                onChange={formik.handleChange}
                error={formik.touched.data && Boolean(formik.errors.data)}
                helperText={formik.touched.data && formik.errors.data}
              />
              <Box px={6}>
                <FormControlLabel
                  control={
                    <Switch
                      type="checkbox"
                      checked={!isPublic}
                      onChange={onTogglerClick}
                    />
                  }
                  label="Private"
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
                px={6}
              >
                <Button variant="contained" type="submit">
                  Add
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Overlay>,
    modalRoot
  );
};
