import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import {
  FieldWrapper,
  Input,
  Label,
  FormWrapper,
  Button,
  ButtonsWrapper,
  StyledLink
} from './RegisterContainer.styled';
import { IUserRegister } from '../../types/user.types';
import { ROUTER_KEYS } from '../../consts/app-keys.const';
import { useRegisterUser } from '../../../hooks/useRegisterUser';

export const RegisterContainer: React.FC = () => {
  const { mutateAsync, isSuccess } = useRegisterUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTER_KEYS.ROOT);
    }
  }, [isSuccess]);

  const initialValues: IUserRegister = { email: '', password: '', confirmPassword: '' };

  const onSubmitHandler = (values: IUserRegister) => {
    if (values.confirmPassword !== values.password) {
      toast.warn('Your passwords are not equal!');
      return;
    }
    const { email, password } = values;
    mutateAsync({ email, password });
  };

  return (
    <FormWrapper>
      <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
        <Form>
          <FieldWrapper>
            <Label htmlFor="register-email">Name</Label>
            <Input id="register-email" type="text" name="email" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="register-password">Password</Label>
            <Input id="register-password" type="text" name="password" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="register-confirm-password">Confirm password</Label>
            <Input id="register-confirm-password" type="text" name="confirmPassword" />
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
