import { Injectable } from '@angular/core';

import { select, Store, Action, ActionsSubject } from '@ngrx/store';
import { Widget } from '@production-angular/api-interfaces';

import * as WidgetActions from './widgets.actions';
import * as fromWidgets from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';

@Injectable()
export class WidgetsFacade {
  loaded$ = this.store.pipe(select(WidgetsSelectors.getWidgetsLoaded));
  allWidgets$ = this.store.pipe(select(WidgetsSelectors.getAllWidgets));
  selectedWidgets$ = this.store.pipe(select(WidgetsSelectors.getSelected));

  constructor(private store: Store<fromWidgets.WidgetsPartialState>, private actions$: ActionsSubject) {}

  selectWidget(selectedId: string) {
    this.dispatch(WidgetActions.selectWidget({ selectedId }));
  }

  loadWidgeets() {
    this.dispatch(WidgetActions.loadWidgets());
  }

  loadWidget(widgetId: string) {
    this.dispatch(WidgetActions.loadWidget({ widgetId }));
  }

  saveWidget(widget: Widget) {
    if (widget.id) {
      this.updateWidget(widget);
    } else{
      this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    this.dispatch(WidgetActions.createWidget({ widget }));
  }

  updateWidget(widget: Widget) {
    this.dispatch(WidgetActions.updateWidget({ widget }));
  }

  deleteWidget(widget: Widget) {
    this.dispatch(WidgetActions.deleteWidget({ widget }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}