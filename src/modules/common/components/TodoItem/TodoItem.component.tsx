/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ITodo } from '../../types/todo.types';
import {
  NavBtn,
  Title,
  Description,
  Actions,
  Button,
  Input,
  ToggleWrapper,
  Label
} from './TodoItem.styled';
import { useDeleteTodo } from '../../../hooks/useDeleteTodo';
import { useChangeTodo } from '../../../hooks/useChangeTodo';

interface IProps {
  todo: ITodo;
}

export const TodoItem: React.FC<IProps> = ({ todo: { _id, title, data, complited } }) => {
  const deleteMutation = useDeleteTodo(_id);
  const changeMutation = useChangeTodo();
  const isDesktopSmall = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1279px)' });
  const onDeleteClick = () => {
    deleteMutation.mutate();
  };
  const onTogglerClick = () => {
    const isComplited = !complited;
    changeMutation.mutate({ id: _id, body: { complited: isComplited } });
  };
  return (
    <>
      <Title>{title}</Title>
      <Description>{data}</Description>
      <Actions>
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
      </Actions>
    </>
  );
};
