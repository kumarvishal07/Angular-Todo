import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteTodoService {

  constructor(private http: HttpClient) { }

  deleteTodo(username, id) {
    return this.http.delete(`http://localhost:8080/delete/${username}/todo/${id}`);
  }
}
