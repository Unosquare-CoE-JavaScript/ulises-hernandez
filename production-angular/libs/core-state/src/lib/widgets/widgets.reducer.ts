import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as WidgetsActions from './widgets.actions';
import { WidgetsEntity } from './widgets.models';


export const WIDGETS_FEATURE_KEY = 'widgets';

export interface State extends EntityState<WidgetsEntity> {
  selectedId?: string | number; // which Widgets record has been selected
  loaded: boolean; // has the Widgets list been loaded
  error?: string | null; // last known error (if any)
}

export interface WidgetsPartialState {
  readonly [WIDGETS_FEATURE_KEY]: State;
}

export const widgetsAdapter: EntityAdapter<WidgetsEntity> = createEntityAdapter<
  WidgetsEntity
>();

export const initialState: State = widgetsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const onFailure = (state, { error }) => ({...state, error});

const widgetsReducer = createReducer(
  initialState,
  /**
   * Select Widget
   */
  on(WidgetsActions.selectWidget, (state, { selectedId }) => (
    Object.assign({}, state, { selectedId })
  )),
  on(WidgetsActions.resetSelectedWidget, (state) => (
    Object.assign({}, state, { selectedId: null })
  )),
  on(WidgetsActions.resetSelectedWidget, state => widgetsAdapter.removeAll(state)),
  /**
   * Load All Widgets
   */
  on(WidgetsActions.loadWidgets, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(WidgetsActions.loadWidgetsSuccess, (state, { widgets }) =>
    widgetsAdapter.setAll(widgets, { ...state, loaded: true })
  ),
  on(WidgetsActions.loadWidgetsFailure, onFailure),
  /**
   * Load a Widget
   */
   on(WidgetsActions.loadWidget, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(WidgetsActions.loadWidgetSuccess, (state, { widget }) =>
    widgetsAdapter.upsertOne(widget, { ...state, loaded: true })
  ),
  on(WidgetsActions.loadWidgetFailure, onFailure),
  /**
   * Add Widget
   */
  on(WidgetsActions.createWidgetSuccess, (state, { widget }) => (
    widgetsAdapter.addOne(widget, state)
  )),
  on(WidgetsActions.createWidgetFailure, onFailure),
  /**
   * Update Widget
   */
  on(WidgetsActions.updateWidgetSuccess, (state, { widget }) => (
    widgetsAdapter.updateOne({ id: widget.id, changes: widget}, state)
  )),
  on(WidgetsActions.updateWidgetFailure, onFailure),
  /**
   * Delete Widget
   */
  on(WidgetsActions.deleteWidgetSuccess, (state, { widget }) => (
    widgetsAdapter.removeOne(widget.id, state)
  )),
  on(WidgetsActions.deleteWidgetFailure, onFailure),
);

export function reducer(state: State | undefined, action: Action) {
  return widgetsReducer(state, action);
}
