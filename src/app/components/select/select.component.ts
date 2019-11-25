import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  identityTypes: any[] = [
    {label:'ID'},
    {label:'Passport'},
    {label:'Driver`s License'}
  ];

  constructor() { }

  ngOnInit() {
  }

}