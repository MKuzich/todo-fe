import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { todoService } from '../service/todo.service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { AddTodoType } from '../common/types/todo.types';
import { IAxiosError } from '../common/types/error.types';

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation((data: AddTodoType) => todoService.addTodo(data), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
    },
    onError: (error: IAxiosError) => {
      toast.error(error.response.data.message);
    },
  });
};
