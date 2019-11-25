import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  code: string = `
    <ft-icon name="search" size="2" collections="factoricons-slim"></ft-icon>
  `;

  constructor() { }

  ngOnInit() {
  }

}
