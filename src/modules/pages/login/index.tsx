import React from 'react';
import { Container } from '../../common/components/Container';
import { LoginContainer } from '../../common/components/LoginContainer';

const LoginPageContainer: React.FC = () => (
  <section>
    <Container>
      <LoginContainer />
    </Container>
  </section>
);

export default LoginPageContainer;
