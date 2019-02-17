import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { IconService } from '../icon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  icons: any[];
  styles: any[];
  categories: any [];
  sizes: any[];
  state: any;

  constructor(
    private title: Title,
    private iconService: IconService
  ) { }

  ngOnInit() {
    this.title.setTitle('Factor Icons Collection');
    this.categories = [];
    this.styles = [];
    this.sizes = [
      {label:"24px", value:"md"},
      {label:"48px", value:"lg"},
      {label:"72px", value:"xl"}
    ];
    this.state = {
      size: this.sizes[2]
    };
    this.iconService.find().subscribe((response:any)=>{
      this.icons = response;
      this.icons.forEach((icon) => {
        this.styles = this.styles.concat(icon.styles.filter((item) => {
          return this.styles.indexOf(item) < 0;
        }));
        this.categories = this.categories.concat(icon.categories.filter((item) => {
          return this.categories.indexOf(item) < 0;
        }));
      });
      this.state.style = this.styles[0];
    });
  }
  setCategory(category) {
    this.state.category = category;
  }
  setStyle(style) {
    this.state.style = style;
  }
  setSize(size) {
    this.state.size = size;
  }

}
