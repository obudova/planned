import { MakeRequestOptions, RequestService } from './request.service';
import { Observable } from 'rxjs/Observable';
import {forwardRef, Inject} from '@angular/core';

export class TaskService {
  apiUrl = 'http://localhost:3000';
  requestService: any;
  constructor (
    @Inject(forwardRef(() => RequestService)) requestService)
   {
    this.requestService = requestService;
  }

  listPersonalTasks(options?: MakeRequestOptions): Observable<any> {
    return this.requestService.request(`${this.apiUrl}/tasks?is_personal=true`, 'GET', {
      ...options
    });
  }
  listProjectTasks(options?: MakeRequestOptions) {
    return this.requestService.request(`${this.apiUrl}/tasks?is_personal=false`, 'GET', {
      ...options
    });
  }
  listAllTasks(options?: MakeRequestOptions) {
    return this.requestService.request(`${this.apiUrl}/tasks`, 'GET', {
      ...options
    });
  }
  listProjects(options?: MakeRequestOptions) {
    return this.requestService.request(`${this.apiUrl}/projects`, 'GET', {
      ...options
    });
  }
  createTask(task: any, id: number, options?: MakeRequestOptions) {
    return this.requestService.request(`${this.apiUrl}/tasks`, 'POST', {
      data: {...task, id},
      ...options
    });
  }
}
