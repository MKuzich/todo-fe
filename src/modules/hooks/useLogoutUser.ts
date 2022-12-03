import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { IAxiosError } from '../common/types/error.types';
import { userService } from '../service/user.service';
import { QUERY_KEYS, STORAGE_KEYS } from '../common/consts/app-keys.const';

export const useLogoutUser = () => {
  const queryClient = useQueryClient();
  return useMutation(() => userService.logout(), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.USER]);
      localStorage.setItem(STORAGE_KEYS.TOKEN, 'null');
    },
    onError: (error: IAxiosError) => {
      toast.error(error.response.data.message);
    },
  });
};
