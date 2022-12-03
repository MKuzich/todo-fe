import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Formik, Form } from 'formik';
import {
  Overlay,
  ModalWindow,
  Title,
  Label,
  Button,
  FormWrapper,
  FieldWrapper,
  ToggleWrapper,
  ToggleGroup,
  Toggler,
  Input,
  Check,
} from './TodoModal.styled';
import { AddTodoType } from '../../types/todo.types';
import { useAddTodo } from '../../../hooks/useAddTodo';

const modalRoot = document.querySelector('#modal-root')!;

interface IProps {
  closeModal: () => void;
}

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

  const onFormSubmitHandler = (values: Omit<AddTodoType, 'public'>) => {
    mutation.mutate({ ...values, public: isPublic });
    closeModal();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Formik initialValues={initialValues} onSubmit={onFormSubmitHandler}>
          <Form>
            <FormWrapper>
              <Title>Add new todo</Title>
              <FieldWrapper>
                <Label htmlFor="add-title">Title</Label>
                <Input id="add-title" type="text" name="title" />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="add-title">Description</Label>
                <Input id="add-data" type="text" name="data" />
              </FieldWrapper>
              <ToggleGroup>
                <Label htmlFor="add-title">Public</Label>
                <ToggleWrapper>
                  <Check
                    id="add-title"
                    type="checkbox"
                    name="public"
                    checked={!isPublic}
                    value={isPublic}
                    onChange={onTogglerClick}
                  />
                  <Toggler onClick={onTogglerClick} />
                </ToggleWrapper>
              </ToggleGroup>
              <Button type="submit">Add</Button>
            </FormWrapper>
          </Form>
        </Formik>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
