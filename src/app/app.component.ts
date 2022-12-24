import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  selector: 'budget-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
  imports: [NxWelcomeComponent],
})
export class AppComponent {
  title = 'budget-management';
}
