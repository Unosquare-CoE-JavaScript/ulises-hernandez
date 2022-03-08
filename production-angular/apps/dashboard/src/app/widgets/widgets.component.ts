import { Component, OnInit } from '@angular/core';
import { Widget } from '@production-angular/api-interfaces';
import { WidgetsFacade } from '@production-angular/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'production-angular-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  
  widgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;
  selectedWidget$: Observable<Widget> = this.widgetsFacade.selectedWidgets$;

  constructor(private widgetsFacade: WidgetsFacade) { }

  ngOnInit(): void {
    this.reset();
    this.widgetsFacade.mutations$.subscribe(() => this.reset());
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    this.selectWidget(null);
  }

  selectWidget(widget: Widget) {
    this.widgetsFacade.selectWidget(widget?.id);
  }

  loadWidgets() {
    this.widgetsFacade.loadWidgets();
  }

  saveWidget(widget: Widget) {
    this.widgetsFacade.saveWidget(widget)
  }

  deleteWidget(widget: Widget) {
    this.widgetsFacade.deleteWidget(widget);
  }


}
