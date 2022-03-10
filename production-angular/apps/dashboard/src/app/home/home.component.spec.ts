import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetsFacade } from '@production-angular/core-state';
import { MaterialModule } from '@production-angular/material';
import { mockWidgetsFacade } from '@production-angular/testing';
import { WidgetsListComponent } from '../widgets/widgets-list/widgets-list.component';
import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        CommonModule,
        HttpClientModule,
        MaterialModule
      ],
      declarations: [ 
        HomeComponent,
        WidgetsListComponent
      ],
      providers: [
        { provide: WidgetsFacade, useValue: mockWidgetsFacade }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
