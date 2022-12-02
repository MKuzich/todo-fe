export interface ITodo {
  _id: string;
  title: string;
  data: string;
  public: boolean;
  complited: boolean;
}

export type AddTodoType = Omit<ITodo, '_id' | 'complited'>;

export interface ITodoChange {
  title?: string;
  data?: string;
  public?: boolean;
  complited?: boolean;
}

export interface ITodoCangeData {
  id: string;
  body: ITodoChange;
}

export interface IQueryParams {
  search: string;
  filter: string;
  page: number;
  limit: number;
}

export interface ITodos {
  todos: ITodo[];
  total: number;
}
