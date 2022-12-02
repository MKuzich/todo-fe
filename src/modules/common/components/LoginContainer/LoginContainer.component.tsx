import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  FieldWrapper,
  Input,
  Label,
  FormWrapper,
  Button,
  ButtonsWrapper,
  StyledLink
} from './LoginContainer.styled';
import { IUserLogin } from '../../types/user.types';
import { ROUTER_KEYS } from '../../consts/app-keys.const';
import { useLoginUser } from '../../../hooks/useLoginUser';

export const LoginContainer: React.FC = () => {
  const { mutateAsync, isSuccess } = useLoginUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTER_KEYS.ROOT);
    }
  }, [isSuccess]);

  const initialValues: IUserLogin = { email: '', password: '' };

  const onSubmitHandler = (values: IUserLogin) => {
    mutateAsync(values);
  };

  return (
    <FormWrapper>
      <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
        <Form>
          <FieldWrapper>
            <Label htmlFor="login-email">Name</Label>
            <Input id="login-email" type="text" name="email" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="login-password">Password</Label>
            <Input id="login-password" type="text" name="password" />
          </FieldWrapper>
          <ButtonsWrapper>
            <StyledLink to={ROUTER_KEYS.WELCOME}>Back</StyledLink>
            <Button type="submit">Submit</Button>
          </ButtonsWrapper>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
