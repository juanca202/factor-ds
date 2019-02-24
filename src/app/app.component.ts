import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedBook: any;
  books: any[] = [
    {
      label: 'Design System',
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
              label: 'Overview',
              url: '/components'
            },
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
              label: 'Message',
              url: '/common/message'
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
            },
            {
              label: 'Navigation',
              type: 'header'
            },
            {
              label: 'Sidenav',
              url: '/navigation/sidenav'
            },
            {
              label: 'Stepper',
              url: '/navigation/stepper'
            }
          ]
        },
        {
          label: 'Templates',
          type: 'collapsible',
          children: [
            {
              label: 'Overview',
              url: '/templates'
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
    { label: 'Components API' },
    {
      label: 'Icons Search'
    }
  ];
  comboboxExpanded: boolean;
  options: any[];
  bookNavigation = {
    previous: {
      label: 'About',
      url: '/about'
    },
    next: {
      label: 'Color',
      url: '/guidelines/color',
      bookName: 'Guidelines'
    }
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.toggleCombobox(this.books[0]);
    this.comboboxExpanded = false;
    this.router.events.subscribe(event => {
      //this.findNode(event.urlAfterRedirects, this.books);
    });
  }
  findNode(url, treeChildren) {

    treeChildren.forEach((treeNode, index) => {
      if (treeNode.url && treeNode.url == url) {

      }
    })
  }
  toggleCombobox(book: any) {
    this.selectedBook = book;
    this.options = this.selectedBook.options;
    this.comboboxExpanded = !this.comboboxExpanded;
  }
}
