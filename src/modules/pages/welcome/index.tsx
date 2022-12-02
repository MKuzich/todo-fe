import React from 'react';
import { Container } from '../../common/components/Container';
import { WelcomeContainer } from '../../common/components/WelcomeContainer';

const WelcomePageContainer: React.FC = () => (
  <section>
    <Container>
      <WelcomeContainer />
    </Container>
  </section>
);

export default WelcomePageContainer;
