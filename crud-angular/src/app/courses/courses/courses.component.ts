import { Component } from '@angular/core';
import { Cource } from '../model/cource';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: Cource[] = [{ id: '1', name: 'Angular', category: 'Frontend' }];
  displayedColumns = ['name', 'category'];
}
