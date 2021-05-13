import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todo`);
  }
  retriveTodo(username: string, id: number)  {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todo/${id}`);
  }
  updateTodo(username: string, id: number, todo: Todo)  {
    return this.http.put(`http://localhost:8080/users/${username}/todo/${id}`,todo);
  }
  saveTodo(username: string, todo: Todo)  {
    return this.http.post(`http://localhost:8080/users/${username}/todo`,todo);
  }
}
