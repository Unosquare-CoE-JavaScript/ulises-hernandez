import { Component, OnInit } from '@angular/core';
import { Widget } from '@production-angular/api-interfaces';
import { WidgetsService } from '@production-angular/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'production-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  widgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgets$ = this.widgetsService.all();
  }

}
