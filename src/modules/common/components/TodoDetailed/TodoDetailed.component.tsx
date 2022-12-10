import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Button,
  Paper,
  Stack,
  Typography,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ITodo } from '../../types/todo.types';
import { useChangeTodo } from '../../../hooks/useChangeTodo';
import { useGetTodo } from '../../../hooks/useGetTodo';
import { MobileHeader } from '../MobileHeader';

interface IProps {
  todo: ITodo;
}

export const TodoDetailed: React.FC<IProps> = ({ todo: { _id } }) => {
  const changeMutation = useChangeTodo();
  const { data, isSuccess } = useGetTodo(_id);
  const isMobile = useMediaQuery({ query: '(max-width: 424px)' });
  const onTogglerCompleteClick = () => {
    if (isSuccess) {
      const isComplited = !data.complited;
      changeMutation.mutate({ id: _id, body: { complited: isComplited } });
    }
  };

  const onTogglerPrivateClick = () => {
    if (isSuccess) {
      const isPublic = !data.public;
      changeMutation.mutate({ id: _id, body: { public: isPublic } });
    }
  };

  if (isSuccess) {
    return (
      <Paper elevation={6}>
        <Stack
          p={{ xs: 2, sm: 4, md: 8 }}
          spacing={4}
          justifyContent="start"
          alignItems="start"
        >
          {isMobile && <MobileHeader />}
          <Typography variant="h4" component="h1">
            {data.title}
          </Typography>
          <Stack spacing={1}>
            <Typography variant="h6" component="h2">
              Description:
            </Typography>
            <Typography variant="body1" component="h2">
              {data.data}
            </Typography>
          </Stack>

          <Stack pl={4} direction="column">
            <FormControlLabel
              control={
                <Switch
                  type="checkbox"
                  checked={data.complited}
                  onChange={onTogglerCompleteClick}
                />
              }
              label="Complete"
            />
            <FormControlLabel
              control={
                <Switch
                  type="checkbox"
                  checked={!data.public}
                  onChange={onTogglerPrivateClick}
                />
              }
              label="Private"
            />
          </Stack>

          <Button variant="outlined" component={Link} to="/">
            Back
          </Button>
        </Stack>
      </Paper>
    );
  }
  return <div>Loading....</div>;
};
