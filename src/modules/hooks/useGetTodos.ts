import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { IAxiosError } from '../common/types/error.types';
import { ITodo } from '../common/types/todo.types';
import { todoService } from '../service/todo.service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';

export const useGetTodos = () => {
  const [params, setParams] = useState({
    filter: 'all',
    search: '',
    page: '1',
    limit: '10',
  });
  const [todosFull, setTodosFull] = useState<ITodo[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { filter, search, page, limit } = params;

  useEffect(() => {
    setParams({
      filter: searchParams.get('filter') ?? 'all',
      search: searchParams.get('search') ?? '',
      page: searchParams.get('page') ?? '1',
      limit: searchParams.get('limit') ?? '10',
    });
  }, [searchParams]);

  const { data, isSuccess } = useQuery(
    [QUERY_KEYS.TODOS, params],
    () => todoService.getAllTodos(filter, search, page, limit),
    {
      onError: (error: IAxiosError) => {
        toast.error(error.response.data.message);
      },
      // select: ({ todos, total }) => ({ todos, total: Math.ceil(total / 10) }),
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      setTodosFull([]);
    }
  }, [filter, search]);

  useEffect(() => {
    if (isSuccess) {
      setTodosFull([...todosFull, ...data.todos]);
    }
  }, [data, isSuccess]);

  return { data, isSuccess, params, todosFull, setSearchParams };
};
