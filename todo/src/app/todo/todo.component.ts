import { Component, OnInit } from '@angular/core';
import { SaveService } from '../service/data/save.service';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  username: string = 'vishal';
  todo: Todo;

  constructor(private service: TodoDataService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.todo = new Todo(this.id, '', '', false, new Date());
    console.log(this.id);
    if (this.id != -1) {
      this.service.retriveTodo(this.username, this.id).subscribe(
        data => {
          this.todo = data;
          console.log(this.todo);
        }
      );
    }
  }
  updateTodo() {
    if (this.id == -1) {
      this.service.saveTodo(this.username, this.todo).subscribe(
        res => {
          alert("Todo created..");
          this.route.navigate(['/todos']);
        }
      )
    }
    else {
      this.service.updateTodo(this.username, this.id, this.todo).subscribe(
        res => {
          alert("Data updated..");
          this.route.navigate(['/todos']);
        }
      )
    }
  }
}
