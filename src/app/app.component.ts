import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedBook: any;
  books: any[] = [
    {
      label:
        'Design System',
      options: [
        {
          label: 'Home',
          url: '/'
        },
        {
          label: 'About',
          url: '/about'
        },
        {
          label: 'Contributing',
          url: '/contributing'
        },
        {
          label: 'Guidelines',
          type: 'collapsible',
          children: [
            {
              label: 'Color',
              url: '/guidelines/color'
            },
            {
              label: 'Spacing',
              url: '/guidelines/spacing'
            },
            {
              label: 'Typography',
              url: '/guidelines/typography'
            },
            {
              label: 'Motion',
              url: '/guidelines/motion'
            },
            {
              label: 'Icons',
              url: '/icons'
            }
          ]
        },
        {
          label: 'Components',
          type: 'collapsible',
          children: [
            {
              label: 'Common',
              type: 'header'
            },
            {
              label: 'Icon',
              url: '/common/icon'
            },
            {
              label: 'Image',
              url: '/common/image'
            },
            {
              label: 'Inputs',
              type: 'header'
            },
            {
              label: 'Text input',
              url: '/inputs/text-input'
            },
            {
              label: 'Text area',
              url: '/inputs/text-area'
            },
            {
              label: 'Select',
              url: '/inputs/select'
            },
            {
              label: 'File picker',
              url: '/inputs/file-picker'
            },
            {
              label: 'Rating',
              url: '/inputs/rating'
            },
            {
              label: 'List',
              url: '/inputs/list'
            }
          ]
        },
        {
          label: 'Templates',
          type: 'collapsible',
          children: [
            {
              label: 'Starter page',
              url: '/templates/page'
            },
            {
              label: 'Basic form',
              url: '/templates/basic-form'
            },
            {
              label: 'Login',
              url: '/templates/login'
            },
            {
              label: 'Search',
              url: '/templates/search'
            },
            {
              label: 'Workflow task',
              url: '/templates/workflow-task'
            },
            {
              label: 'Wizard',
              url: '/templates/wizard'
            }
          ]
        }
      ]
    },
    { label: 'Components' },
    {
      label: 'Icons',
      options: [
        {
          label: 'Overview',
          url: 'icons'
        },
        {
          label: 'Search',
          url: 'icons/search'
        }
      ]
    }
  ];
  comboboxExpanded: boolean;
  options: any[];

  constructor() { }

  ngOnInit() {
    this.toggleCombobox(this.books[0]);
    this.comboboxExpanded = false;
  }
  toggleCombobox(book: any) {
    this.selectedBook = book;
    this.options = this.selectedBook.options;
    this.comboboxExpanded = !this.comboboxExpanded;
  }
}
