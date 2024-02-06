import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cource } from '../model/cource';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  list(): Cource[] {
    return [
      { id: '1', name: 'Angular', category: 'Frontend' },
      { id: '2', name: 'React', category: 'Frontend' },
      { id: '3', name: 'Vue', category: 'Frontend' },
      { id: '4', name: 'Spring Boot', category: 'Backend' },
      { id: '5', name: 'Express', category: 'Backend' },
    ];
  }
}
