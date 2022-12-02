import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { IAxiosError } from '../common/types/error.types';
import { userService } from '../service/user.service';
import { QUERY_KEYS, STORAGE_KEYS } from '../common/consts/app-keys.const';
import { IUserLogin } from '../common/types/user.types';

export const useRegisterUser = () => {
  const queryClient = useQueryClient();
  return useMutation((data: IUserLogin) => userService.register(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.USER]);
      localStorage.setItem(STORAGE_KEYS.TOKEN, `Bearer ${data}`);
    },
    onError: (error: IAxiosError) => {
      toast.error(error.response.data.message);
    }
  });
};
