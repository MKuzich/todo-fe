import { HttpService } from './http.service';
import { IUserLogin, IPasswords } from '../common/types/user.types';

class UserService extends HttpService {
  private creatPathUrl(path: string): string {
    return `user/${path}`;
  }

  public async register(body: IUserLogin) {
    const { data } = await this.post({
      url: this.creatPathUrl('register'),
      body,
    });
    return data;
  }

  public async login(body: IUserLogin) {
    const { data } = await this.post({ url: this.creatPathUrl('login'), body });
    return data;
  }

  public async logout() {
    const { data } = await this.post({
      url: this.creatPathUrl('logout'),
      body: '',
    });
    return data;
  }

  public async change(body: IPasswords) {
    const { data } = await this.patch({
      url: this.creatPathUrl('change'),
      body,
    });
    return data;
  }
}

export const userService = new UserService();
