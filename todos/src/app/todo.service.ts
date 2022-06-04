import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getTodoByUserId(userId: number): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>("https://jsonplaceholder.typicode.com/todos?userId=" + userId);
    }
}
