import { Component, OnInit } from '@angular/core';

import { MessageService } from 'factor-common';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  code: string = `
    this.messageService.show(
      'Notificaciones pueden incluir alertas, sonidos e insignia en el ícono.',
      {
        title: 'Tareas quiere enviarte notificaciones',
        type:'modal',
        width: '350px',
        actions: [
          {label: 'No permitir', value: 1},
          {label: 'Permitir', value: 2, color: 'primary'}
        ]
      }
    ).subscribe((value) => {
      switch(value) {
        case 1:
          //TODO: Do something
          break;
        case 2:
          //TODO: Do something
          break;
      }
    });
  `;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
  show(message, options) {
    this.messageService.show(message, options);
  }

}
