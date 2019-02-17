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
              label: 'Workflow task',
              url: '/templates/workflow-task'
            },
            {
              label: 'Search',
              url: '/templates/search'
            },
            {
              label: 'Login',
              url: '/templates/login'
            },
            {
              label: 'Wizard',
              url: '/templates/wizard'
            },
            {
              label: 'Style guide',
              url: '/templates/style-guide'
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
