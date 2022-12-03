import { HttpService } from './http.service';
import {
  ITodo,
  AddTodoType,
  ITodoChange,
  ITodos,
} from '../common/types/todo.types';

class TodoService extends HttpService {
  private creatPathUrl(path: string): string {
    return `todos/${path}`;
  }

  public async getAllTodos(
    filter: string,
    search = '',
    page = '1',
    limit = '10'
  ): Promise<ITodos> {
    const { data } = await this.get({
      url: this.creatPathUrl(
        `?search=${search}&filter=${filter}&page=${page}&limit=${limit}`
      ),
    });
    return data;
  }

  public async getTodo(id: string): Promise<ITodo> {
    const { data } = await this.get({ url: this.creatPathUrl(id) });
    return data;
  }

  public async addTodo(body: AddTodoType): Promise<ITodo> {
    const { data } = await this.post({ url: this.creatPathUrl(''), body });
    return data;
  }

  public async changeTodo({
    id,
    body,
  }: {
    id: string;
    body: ITodoChange;
  }): Promise<ITodo> {
    const { data } = await this.put({ url: this.creatPathUrl(id), body });
    return data;
  }

  public async deleteTodo(id: string): Promise<ITodo> {
    const { data } = await this.delete({ url: this.creatPathUrl(id) });
    return data;
  }
}

export const todoService = new TodoService();
