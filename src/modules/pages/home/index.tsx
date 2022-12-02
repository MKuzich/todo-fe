import React from 'react';
import { TodoContainer } from '../../common/components/TodoContainer';

import { Container } from '../../common/components/Container';

const HomePageContainer: React.FC = () => (
  <section>
    <Container>
      <TodoContainer />
    </Container>
  </section>
);

export default HomePageContainer;
