import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Widget } from '@production-angular/api-interfaces';
import { Observable, of } from 'rxjs';

import { WidgetsService } from './widgets.service';

const httpMock = {
  get(): Observable<Widget[]> {
    return of([
      {id: '1', title: 'W 1', description: ''},
      {id: '2', title: 'W 2', description: ''},
    ])
  },
  post(widget: Widget): Observable<Widget> {
    return of(widget);
  },
  put(widget: Widget): Observable<Widget> {
    return of(widget);
  },
}

describe('WidgetsService', () => {
  let service: WidgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: httpMock},
      ]
    });
    service = TestBed.inject(WidgetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
