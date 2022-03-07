import { Injectable } from '@nestjs/common';
import { Widget } from '@production-angular/api-interfaces';
import { uuidv4 } from 'uuid';

@Injectable()
export class WidgetsService {

  mockWidgets: Widget[] = [
    { id: '1', title: 'W 1', description: 'This is a Nest widget' },
    { id: '2', title: 'W 2', description: 'This is a Nest widget' },
    { id: '3', title: 'W 3', description: 'This is a Nest widget' },
    { id: '4', title: 'W 4', description: 'This is a Nest widget' },
  ];

  create(widget: Widget) {
    return this.mockWidgets = [...this.mockWidgets, Object.assign({}, widget, {id: uuidv4()})];
  }

  findAll() {
    return this.mockWidgets;
  }

  findOne(id: string) {
    return this.mockWidgets.find(widget => widget.id === id);
  }

  update(id: string, widget: Widget) {
    this.mockWidgets = this.mockWidgets.map(w => w.id === id ? widget : w);
    return this.mockWidgets;
  }

  remove(id: string) {
    this.mockWidgets = this.mockWidgets.filter(widget => widget.id !== id);
    this.mockWidgets;
  }
}
