import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  days: any[];

  constructor() { }

  ngOnInit() {
    const today = new Date();
    this.days = [{
      date: today,
      weekday: 0,
      tasks: [
        {title:'Pantallas de flujo de caja, cambios en cupones', time:2, project:{name:'Mesa de dinero'}},
        {title:'Pantallas de flujo de caja, cambios en cupones', time:2, project:{name:'Mesa de dinero'}},
        {title:'Pantallas de flujo de caja, cambios en cupones', time:2, project:{name:'Mesa de dinero'}}
      ]
    }, {
      date: today,
      weekday: 1,
      tasks: [
        {title:'Pantallas de flujo de caja, cambios en cupones', time:2, project:{name:'Mesa de dinero'}}
      ]
    }, {
      date: today,
      weekday: 2,
      tasks: [
        {title:'Pantallas de flujo de caja, cambios en cupones', time:2, project:{name:'Mesa de dinero'}}
      ]
    }, {
      date: today,
      weekday: 3,
      tasks: [
        {title:'Pantallas de flujo de caja, cambios en cupones', time:2, project:{name:'Mesa de dinero'}}
      ]
    }, {
      date: today,
      weekday: 4,
      tasks: [
        {title:'Corrección de bugs guardado de campos y presentación de datos', time:5, project:{name:'Diners'}}
      ]
    }, {
      date: today,
      weekday: 5,
      tasks: [
        {title:'Cambio de cierre de sesión para ejecutarle sin esperar respuesta del identity, ventana de notificación push', time:2, project:{name:'Cacpeco'}}
      ]
    }, {
      date: today,
      weekday: today.getDay(),
      tasks: [
        {title:'Pantallas de flujo de caja, cambios en cupones', time:2, project:{name:'Mesa de dinero'}}
      ]
    }];
  }

}
