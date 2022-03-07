import { Component, OnInit } from '@angular/core';
import { Widget } from '@production-angular/api-interfaces';
import { WidgetsService } from '@production-angular/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'production-angular-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  
  widgets$: Observable<Widget[]>;
  selectedWidget: Widget;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    this.selectedWidget = {
      id: null,
      title: '',
      description: ''
    }
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  loadWidgets() {
    this.widgets$ = this.widgetsService.all();
  }

  saveWidget(widget: Widget) {
    if (widget.id) {
      this.updateWidget(widget) 
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    this.widgetsService.create(widget)
      .subscribe(result => this.reset());
  }

  updateWidget(widget: Widget) {
    this.widgetsService.update(widget)
      .subscribe(result => this.reset());
  }

  deleteWidget(widget: Widget) {
    this.widgetsService.delete(widget)
      .subscribe(result => this.reset());
  }


}
