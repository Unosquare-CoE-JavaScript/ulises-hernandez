import { Component, OnInit } from '@angular/core';
import { Widget } from '@production-angular/api-interfaces';
import { WidgetsService } from '@production-angular/core-data';
import { WidgetsFacade } from '@production-angular/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'production-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  widgets$: Observable<Widget[]> = this.widgetFacade.allWidgets$;

  constructor(private widgetFacade: WidgetsFacade) { }

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgetFacade.loadWidgets();
  }

}
