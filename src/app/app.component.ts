import { Component } from '@angular/core';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

@Component({
  standalone: true,
  selector: 'budget-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
  imports: [TransactionListComponent],
})
export class AppComponent {
  title = 'budget-management';
}
