import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { IAxiosError } from '../common/types/error.types';
import { todoService } from '../service/todo.service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';

export const useDeleteTodo = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => todoService.deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.TODOS]);
    },
    onError: (error: IAxiosError) => {
      toast.error(error.response.data.message);
    },
  });
};
