import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreDataModule } from '@production-angular/core-data';
import { CoreStateModule, WidgetsFacade } from '@production-angular/core-state';
import { MaterialModule } from '@production-angular/material';
import { mockEmptyWidget, mockWidget, mockWidgetsFacade } from '@production-angular/testing';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';
import { WidgetsListComponent } from './widgets-list/widgets-list.component';
import { WidgetsComponent } from './widgets.component';


describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;
  let debugElement: DebugElement;
  let widgetsFacade: WidgetsFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        WidgetsComponent,
        WidgetDetailsComponent,
        WidgetsListComponent
      ],
      imports:[
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: WidgetsFacade, useValue: mockWidgetsFacade }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    widgetsFacade = TestBed.inject(WidgetsFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call widgetsFacade selectWidget', () => {
    const spy = spyOn(widgetsFacade, 'selectWidget');
    component.selectWidget(mockWidget);

    expect(spy).toHaveBeenCalledWith(mockWidget.id);
  });

  describe('should on save call widgetFacade', () => {
    it('updateWidget', () => {
      const spy = spyOn(widgetsFacade, 'saveWidget');
      component.saveWidget(mockWidget);
      
      expect(spy).toHaveBeenCalledWith(mockWidget);
    });

    it('createWidget', () => {
      const spy = spyOn(widgetsFacade, 'saveWidget');
      component.saveWidget(mockEmptyWidget);
      
      expect(spy).toHaveBeenCalledWith(mockEmptyWidget);
    });
  })

  it('should on delete call widgetFacade deleteWidget', () => {
    const spy = spyOn(widgetsFacade, 'deleteWidget');
    component.deleteWidget(mockWidget);
      
    expect(spy).toHaveBeenCalledWith(mockWidget);
  });
});
