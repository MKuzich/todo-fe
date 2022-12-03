import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SwiperSlide } from 'swiper/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  HeadWrapper,
  TodoList,
  HeadTitle,
  Container,
  Item,
  StyledSwiper,
  Paginate,
} from './TodoContainer.styled';
import { TodoItem } from '../TodoItem';
import { useGetTodos } from '../../../hooks/useGetTodos';
import { Controls } from '../Controls';
import { TodoModal } from '../TodoModal';
import { MobileHeader } from '../MobileHeader';
import 'swiper/css';
import { ITodo } from '../../types/todo.types';

export const TodoContainer: React.FC = () => {
  const { data, isSuccess, params, todosFull, setSearchParams } = useGetTodos();
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 425px) and (max-width: 767px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 424px)' });

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const handlePageClick = (event: any) => {
    setSearchParams({ ...params, page: (event.selected + 1).toString() });
  };

  const handleSwipeNext = () => {
    setSearchParams({ ...params, page: (Number(params.page) + 1).toString() });
  };

  const handleonReachEnd = () => {
    if (data?.total === Number(params.page)) return;
    setSearchParams({ ...params, page: (Number(params.page) + 1).toString() });
  };

  return (
    <>
      <MobileHeader />
      <Controls openAddModal={openAddModal} />
      <Container>
        {isDesktop && (
          <HeadWrapper>
            <HeadTitle>Todo title</HeadTitle>
            <HeadTitle>Description</HeadTitle>
            <HeadTitle>Actions</HeadTitle>
          </HeadWrapper>
        )}
        {isMobile && isSuccess && (
          <InfiniteScroll
            dataLength={todosFull.length}
            next={handleSwipeNext}
            hasMore={data?.total !== Number(params.page)}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center', marginTop: '20px' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <TodoList>
              {todosFull.map((todo: ITodo) => (
                <Item key={todo._id}>
                  <TodoItem todo={todo} />
                </Item>
              ))}
            </TodoList>
          </InfiniteScroll>
        )}
        {isTablet && isSuccess && (
          <StyledSwiper spaceBetween={100} onReachEnd={handleonReachEnd}>
            {todosFull.map((todo: ITodo) => (
              <SwiperSlide key={todo._id}>
                <TodoItem todo={todo} />
              </SwiperSlide>
            ))}
          </StyledSwiper>
        )}
        {isDesktop && (
          <TodoList>
            {isSuccess &&
              data?.todos.map((todo: ITodo) => (
                <Item key={todo._id}>
                  <TodoItem todo={todo} />
                </Item>
              ))}
          </TodoList>
        )}
      </Container>
      {isDesktop && (
        <Paginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={data?.total ?? 1}
          forcePage={Number(params.page) - 1}
          previousLabel="previous"
          activeClassName="selected"
        />
      )}
      {showAddModal && <TodoModal closeModal={() => setShowAddModal(false)} />}
    </>
  );
};
