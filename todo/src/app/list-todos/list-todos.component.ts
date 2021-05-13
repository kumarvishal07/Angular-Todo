import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteTodoService } from '../service/data/delete-todo.service';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public userName: string,
    public descripion: string,
    public complete: boolean,
    public targetDate: Date
  ) { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  username = 'vishal';
  todos: Todo[];
  id: number;
  deleteMsg: string;
  todo: Todo;
  constructor(private service: TodoDataService, private deleteservice: DeleteTodoService, private route: Router) { }


  ngOnInit() {
    this.service.retriveAllTodos(this.username).subscribe(
      res => this.todos= res
    )
  }

  deleteTodo(username, id) {
    this.deleteservice.deleteTodo(this.username, id).subscribe(
      res => {
        alert('Todo deleted successfully');
        this.route.navigate(['/todos']);

      }
    )
  }

  updateTodo(username, id) {
    console.log(id);
    this.route.navigate(['/todo', id]);
  }

  addTodo(){
    this.route.navigate(['/todo',-1]);
  }
}
