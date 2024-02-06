import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cource } from '../model/cource';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Cource[]>(this.API).pipe(
      first(),
      delay(2000),
      tap((courses) => console.log(courses))
    );
  }
}
