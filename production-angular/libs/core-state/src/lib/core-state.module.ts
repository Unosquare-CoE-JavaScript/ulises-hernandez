import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Params } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import * as fromRouter from '@ngrx/router-store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducerMap, RootStoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WidgetsEffects } from './widgets/widgets.effects';
import { WidgetsFacade } from './widgets/widgets.facade';
import * as fromWidgets from './widgets/widgets.reducer';

export interface RouterStateUrl {
  url: string;
  queryParamas: string;
  params: Params;
}

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [fromWidgets.WIDGETS_FEATURE_KEY]: fromWidgets.State
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromWidgets.WIDGETS_FEATURE_KEY]: fromWidgets.reducer
}

const STORE_NAME = 'pa-store';
const storeConfig: RootStoreConfig<any, any> = {
  runtimeChecks : {
    strictActionImmutability: true,
    strictActionSerializability: true,
    strictStateImmutability: true,
    strictStateSerializability: true
  }
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([WidgetsEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, name: STORE_NAME}),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'})
  ],
  providers: [WidgetsFacade],
})
export class CoreStateModule {}
