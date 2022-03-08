import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { Widget } from '@production-angular/api-interfaces';
import { WidgetsService } from '@production-angular/core-data';
import * as WidgetsActions from './widgets.actions';
import { map } from 'rxjs/operators'


@Injectable()
export class WidgetsEffects {
  loadWidgets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WidgetsActions.loadWidgets),
      fetch({
        run: (action) =>
          this.widgetService
            .all()
            .pipe(
              map((widgets: Widget[]) =>
                WidgetsActions.loadWidgetsSuccess({ widgets })
              )
            ),
        onError: (action, error) => {
          console.error('Error', error);
          return WidgetsActions.loadWidgetsFailure({ error });
        },
      })
    )
  );

  loadWidget$ = createEffect(() => this.actions$.pipe(
    ofType(WidgetsActions.loadWidget),
    fetch({
      run: (action) => 
        this.widgetService.find(action.widgetId)
          .pipe(
            map((widget: Widget) => WidgetsActions.loadWidgetSuccess({ widget}))
          ),
      onError: (action, error) => WidgetsActions.loadWidgetFailure({ error })
    })
  ));

  createWidget$ = createEffect(() => this.actions$.pipe(
    ofType(WidgetsActions.createWidget),
    fetch({
      run: action =>
        this.widgetService.create(action.widget)
          .pipe(
            map((widget: Widget) => WidgetsActions.createWidgetSuccess({ widget }))
          ),
      onError: (action, error) => WidgetsActions.createWidgetFailure({ error })
    })
  ));

  updateWidget$ = createEffect(() => this.actions$.pipe(
    ofType(WidgetsActions.updateWidget),
    fetch({
      run: action =>
        this.widgetService.update(action.widget)
          .pipe(
            map((widget: Widget) => WidgetsActions.updateWidgetSuccess({ widget }))
          ),
      onError: (action, error) => WidgetsActions.updateWidgetFailure({ error })
    })
  ));

  deleteWidget$ = createEffect(() => this.actions$.pipe(
    ofType(WidgetsActions.deleteWidget),
    fetch({
      run: action => 
        this.widgetService.delete(action.widget)
          .pipe(
            map((widget: Widget) => WidgetsActions.deleteWidgetSuccess({ widget }))
          ),
      onError: (action, error) => WidgetsActions.deleteWidgetFailure({ error })
    })
  ));


  constructor(private actions$: Actions, private widgetService: WidgetsService) {}
}
