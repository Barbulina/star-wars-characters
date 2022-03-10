import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() count: number = 0;
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 0;
  @Output() selectPage: EventEmitter<number> = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit(): void {
    this.calcPages();
  }

  calcPages(): void {
    this.pages = [];
    for (let i = 1; i <= Math.ceil(this.count / this.pageSize); i++) {
      this.pages.push(i);
    }
  }

  onSelectPage(page: number): void {
    this.selectPage.emit(page);
  }
}
