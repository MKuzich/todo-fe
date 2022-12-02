import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { IAxiosError } from '../common/types/error.types';
import { todoService } from '../service/todo.service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';

export const useGetTodo = (id: string) =>
  useQuery([QUERY_KEYS.TODOS, id], () => todoService.getTodo(id), {
    onError: (error: IAxiosError) => {
      toast.error(error.response.data.message);
    }
  });
