import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  value: number = 0;
  code: string = `
    <ft-progress size="1"></ft-progress>
  `;

  constructor() { }

  ngOnInit() {
    let interval = setInterval(() => {
      this.value += 2;
      if (this.value>=100) {
        clearInterval(interval);
      }
    }, 100);
  }

}
