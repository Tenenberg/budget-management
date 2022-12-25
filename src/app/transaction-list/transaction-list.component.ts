import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';
import { MaterialExampleModule } from '../material.module'

@Component({
  selector: 'budget-management-transaction-list',
  standalone: true,
  providers: [],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialExampleModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionListComponent implements OnInit {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  transactions: Observable<Transaction[]> = <Observable<Transaction[]>>(
    this.httpClient.get('../assets/transactions.json')
  );

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get('../assets/transactions.json').subscribe((t) => {
      console.log(t);
    });
  }
}
