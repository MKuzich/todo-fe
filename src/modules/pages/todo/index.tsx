import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTodo } from '../../hooks/useGetTodo';
import { Container } from '../../common/components/Container';
import { TodoDetailed } from '../../common/components/TodoDetailed';

const TodoPageContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;
  const { data, isSuccess } = useGetTodo(id);

  return (
    <section>
      <Container>{isSuccess ? <TodoDetailed todo={data} /> : <div>Error ...</div>}</Container>
    </section>
  );
};

export default TodoPageContainer;
