import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@production-angular/material';
import { UiToolbarModule } from '@production-angular/ui-toolbar';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        CommonModule,
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule,
        UiToolbarModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', fakeAsync(() => {
    const spyObj = spyOn(component, 'logout');
    const logoutBtn = debugElement.query(By.css('production-angular-toolbar'))
                        .queryAll(By.css('button[mat-mini-fab]'))[1];
    logoutBtn.nativeElement.click();
    tick();

    expect(logoutBtn).toBeDefined();
    expect(spyObj).toHaveBeenCalled();
  }));

  it('should toggle sidenav', fakeAsync(() => {
    const spyObj = spyOn(component, 'toggleSidenav');
    const toggleBtn = debugElement.query(By.css('production-angular-toolbar'))
                        .queryAll(By.css('button[mat-mini-fab]'))[0];
    toggleBtn.nativeElement.click();
    tick();

    expect(toggleBtn).toBeDefined();
    expect(spyObj).toHaveBeenCalled();
  }));
});
