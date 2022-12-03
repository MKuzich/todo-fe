import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  FieldWrapper,
  Input,
  Label,
  FormWrapper,
  Button,
  ButtonsWrapper,
  StyledLink,
} from './ChangeContainer.styled';
import { IPasswords } from '../../types/user.types';
import { ROUTER_KEYS } from '../../consts/app-keys.const';
import { useChangeUser } from '../../../hooks/useChangeUser';
import { useLogoutUser } from '../../../hooks/useLogoutUser';

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

  const onSubmitHandler = (values: IPasswords) => {
    if (values.oldPassword === values.newPassword) {
      toast.warn(
        'Your passwords are equal! Please change new password for request!'
      );
      return;
    }
    mutateAsync(values);
  };

  const onClickHandler = () => {
    logout();
  };

  return (
    <FormWrapper>
      <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
        <Form>
          <FieldWrapper>
            <Label htmlFor="change-email">Name</Label>
            <Input id="change-email" type="text" name="email" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="change-password">Old password</Label>
            <Input id="change-password" type="text" name="oldPassword" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="change-confirm-password">New password</Label>
            <Input id="change-confirm-password" type="text" name="password" />
          </FieldWrapper>
          <ButtonsWrapper>
            <StyledLink to={ROUTER_KEYS.WELCOME}>Back</StyledLink>
            <Button type="submit">Submit</Button>
          </ButtonsWrapper>
        </Form>
      </Formik>
      <Button type="button" onClick={onClickHandler}>
        Logout
      </Button>
    </FormWrapper>
  );
};
