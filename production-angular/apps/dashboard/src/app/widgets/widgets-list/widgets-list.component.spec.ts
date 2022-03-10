import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Widget } from '@production-angular/api-interfaces';
import { MaterialModule } from '@production-angular/material';

import { WidgetsListComponent } from './widgets-list.component';

const mockWidgets: Widget[] = [
  { id: '1', title: 'W1', description: ''},
  { id: '2', title: 'W2', description: ''},
  { id: '3', title: 'W3', description: ''},
  { id: '4', title: 'W4', description: ''},
]

describe('WidgetsListComponent', () => {
  let component: WidgetsListComponent;
  let fixture: ComponentFixture<WidgetsListComponent>;
  let debugElement: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [ WidgetsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list of widgets', () => {
    component.widgets = mockWidgets;
    fixture.detectChanges();
    const listOfWidgets = debugElement.queryAll(By.css('mat-list-item'));

    expect(listOfWidgets.length).toBe(4);
  });

  it('should emit selected event', fakeAsync(() => {
    const spyObj = spyOn(component.selected, 'emit');
    component.widgets = mockWidgets;
    fixture.detectChanges();
    const listOfWidgets = debugElement.queryAll(By.css('mat-list-item'));
    listOfWidgets[0].nativeElement.click();

    expect(spyObj).toHaveBeenCalled();
    expect(spyObj).toHaveBeenCalledWith(component.widgets[0]);
  }));

  it('should emit deleted event', fakeAsync(() => {
    const spyObj = spyOn(component.deleted, 'emit');
    component.widgets = mockWidgets;
    fixture.detectChanges();
    const listOfWidgets = debugElement.queryAll(By.css('mat-list-item'));
    listOfWidgets[0].query(By.css('button')).nativeElement.click();

    expect(spyObj).toHaveBeenCalled();
    expect(spyObj).toHaveBeenCalledWith(component.widgets[0]);
  }));
});
