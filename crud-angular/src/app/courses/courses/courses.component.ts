import { Component, OnInit } from '@angular/core';
import { Cource } from '../model/cource';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Cource[]>;
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list();
  }

  ngOnInit(): void {}
}
