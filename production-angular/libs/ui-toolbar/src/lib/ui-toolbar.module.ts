import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@production-angular/material'
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ToolbarComponent],
  exports: [
    ToolbarComponent
  ],
})
export class UiToolbarModule {}
