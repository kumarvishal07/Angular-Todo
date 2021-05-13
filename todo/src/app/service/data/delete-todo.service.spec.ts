import { TestBed } from '@angular/core/testing';

import { DeleteTodoService } from './delete-todo.service';

describe('DeleteTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteTodoService = TestBed.get(DeleteTodoService);
    expect(service).toBeTruthy();
  });
});
