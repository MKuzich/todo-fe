import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { IAxiosError } from '../common/types/error.types';
import { userService } from '../service/user.service';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { IPasswords } from '../common/types/user.types';

export const useChangeUser = () => {
  const queryClient = useQueryClient();
  return useMutation((data: IPasswords) => userService.change(data), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.USER]);
    },
    onError: (error: IAxiosError) => {
      toast.error(error.response.data.message);
    },
  });
};
