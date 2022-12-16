import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SwiperSlide } from 'swiper/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { blueGrey } from '@mui/material/colors';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  TablePagination,
  CircularProgress,
  Box,
} from '@mui/material';
import { TodoList, Item, StyledSwiper } from './TodoContainer.styled';
import { TodoItem } from '../TodoItem';
import { useGetTodos } from '../../../hooks/useGetTodos';
import { Controls } from '../Controls';
import { TodoModal } from '../TodoModal';
import { MobileHeader } from '../MobileHeader';
import 'swiper/css';
import { ITodo } from '../../types/todo.types';

export const TodoContainer: React.FC = () => {
  const { data, isSuccess, isLoading, params, todosFull, setSearchParams } =
    useGetTodos();
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 425px) and (max-width: 899px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 424px)' });

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchParams({
      ...params,
      page: '1',
      limit: parseInt(event.target.value, 10).toString(),
    });
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setSearchParams({ ...params, page: (newPage + 1).toString() });
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

      {isDesktop && (
        <TableContainer component={Paper} elevation={6}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow
                sx={{
                  '& th': {
                    color: '#fff',
                    backgroundColor: blueGrey[900],
                  },
                }}
              >
                <TableCell>Todo title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {isSuccess &&
                data?.todos.map((todo: ITodo) => (
                  <TableRow key={todo._id}>
                    <TodoItem todo={todo} />
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {isLoading && (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
          py={8}
        >
          <CircularProgress />
        </Box>
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data?.total ?? -1}
          rowsPerPage={Number(params.limit) ?? 10}
          page={Number(params.page) - 1 ?? 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
      {showAddModal && <TodoModal closeModal={() => setShowAddModal(false)} />}
    </>
  );
};
