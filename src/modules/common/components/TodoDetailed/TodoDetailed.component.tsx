import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ITodo } from '../../types/todo.types';
import {
  MainTitle,
  Title,
  Description,
  Label,
  ToggleWrapper,
  Toggler,
  Input,
  ToggleGroup,
  Controls,
  Button,
} from './TodoDetailed.styled';
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
      <>
        {isMobile && <MobileHeader />}
        <MainTitle>{data.title}</MainTitle>
        <Title>Description:</Title>
        <Description>{data.data}</Description>
        <Controls>
          <ToggleGroup>
            <Label htmlFor={`${_id}complited`}>Complete</Label>
            <ToggleWrapper>
              <Input
                id={`${_id}complited`}
                type="checkbox"
                checked={data.complited}
                onChange={onTogglerCompleteClick}
              />
              <Toggler onClick={onTogglerCompleteClick} />
            </ToggleWrapper>
          </ToggleGroup>
          <ToggleGroup>
            <Label htmlFor={`${_id}public`}>Private</Label>
            <ToggleWrapper>
              <Input
                id={`${_id}public`}
                type="checkbox"
                checked={data.public}
                onChange={onTogglerPrivateClick}
              />
              <Toggler onClick={onTogglerPrivateClick} />
            </ToggleWrapper>
          </ToggleGroup>
        </Controls>
        <Button to="/">Back</Button>
      </>
    );
  }
  return <div>Loading....</div>;
};
