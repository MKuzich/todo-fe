/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { TableCell, Stack, Switch, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { ITodo } from '../../types/todo.types';
import { useDeleteTodo } from '../../../hooks/useDeleteTodo';
import { useChangeTodo } from '../../../hooks/useChangeTodo';

interface IProps {
  todo: ITodo;
}

export const TodoItem: React.FC<IProps> = ({
  todo: { _id, title, data, complited },
}) => {
  const deleteMutation = useDeleteTodo(_id);
  const changeMutation = useChangeTodo();
  const isTablet = useMediaQuery({ query: '(max-width: 767px)' });

  const onDeleteClick = () => {
    deleteMutation.mutate();
  };
  const onTogglerClick = () => {
    const isComplited = !complited;
    changeMutation.mutate({ id: _id, body: { complited: isComplited } });
  };
  return (
    <>
      {!isTablet && (
        <>
          <TableCell>{title}</TableCell>
          <TableCell>{data}</TableCell>
          <TableCell>
            <Stack direction="row" spacing={0.5}>
              <IconButton
                color="primary"
                size="small"
                component={Link}
                to={`${_id}`}
                replace
              >
                <HiOutlineDocumentText />
              </IconButton>
              <IconButton
                color="primary"
                size="small"
                type="button"
                onClick={onDeleteClick}
              >
                <AiOutlineDelete />
              </IconButton>
              <Switch
                size="small"
                type="checkbox"
                checked={complited}
                onChange={onTogglerClick}
              />
            </Stack>
          </TableCell>
        </>
      )}
      {/* <Title>{title}</Title> */}
      {/* <Description>{data}</Description> */}
      {/* <Actions>
        <NavBtn to={`${_id}`} replace>
          {isDesktopSmall ? 'V' : 'View'}
        </NavBtn>
        <Button type="button" onClick={onDeleteClick}>
          {isDesktopSmall ? 'X' : 'Delete'}
        </Button>
        <ToggleWrapper>
          <Input
            id={`${_id}complited`}
            type="checkbox"
            checked={complited}
            onChange={onTogglerClick}
          />
          <Label htmlFor={`${_id}complited`} onChange={onTogglerClick} />
        </ToggleWrapper>
      </Actions> */}
    </>
  );
};
