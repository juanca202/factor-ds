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
      children: [
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
              label: 'Progress',
              url: '/common/progress'
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
  bookNavigation: any = {
    previous: {},
    current: {},
    next: {}
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.toggleCombobox(this.books[0]);
    this.comboboxExpanded = false;
    this.router.events.subscribe((event: any) => {
      this.findNode(event.urlAfterRedirects, this.books[0]);
    });
  }
  findNode(url: string, node: any, parentNode?: any) {
    node.children.forEach((childNode, index) => {
      if (childNode.url && childNode.url == url) {
        this.bookNavigation.current = childNode;
        let previousNode = node.children[index - 1];
        if (previousNode && previousNode.children && previousNode.children.length > 0) {
          previousNode = previousNode.children[previousNode.children.length - 1];
          if (previousNode.type == 'header') {
            previousNode = previousNode.children[previousNode.children.length - 2];
          }
        } else if (parentNode && parentNode.children && parentNode.children.length > 0) {
          const index = parentNode.children.indexOf(node);
          previousNode = parentNode.children[index - 1];
          if (previousNode && previousNode.children && previousNode.children.length>0) {
            previousNode = previousNode.children[previousNode.children.length - 1];
          }
        }
        if (previousNode) {
          this.bookNavigation.previous = previousNode;
          this.bookNavigation.previous.bookName = parentNode? parentNode.label : null;
        } else {
          this.bookNavigation.previous = null;
        }

        let nextNode = node.children[index + 1];
        if (nextNode) {
          if (nextNode.children && nextNode.children.length > 0) {
            this.bookNavigation.next = nextNode.children[0];
            this.bookNavigation.next.bookName = nextNode.label;
          } else {
            if (nextNode.type && nextNode.type == 'header') {
              nextNode = node.children[index + 2];
            }
            this.bookNavigation.next = nextNode;
            this.bookNavigation.next.bookName = node.label;
          }
        } else if (parentNode && parentNode.children && parentNode.children.length > 0) {
          const index = parentNode.children.indexOf(node);
          let nextSibling = parentNode.children[index + 1];
          if (nextSibling.type && nextSibling.type == 'header') {
            nextSibling = parentNode.children[index + 2];
          }
          if (nextSibling && nextSibling.children && nextSibling.children.length > 0) {
            this.bookNavigation.next = nextSibling.children[0];
            this.bookNavigation.next.bookName = nextSibling.label;
          } else {
            this.bookNavigation.next = nextSibling;
            this.bookNavigation.next.bookName = parentNode.label;
          }
        } else {
          this.bookNavigation.next = null;
        }
      } else if (childNode.children) {
        this.findNode(url, childNode, node);
      }
    });
  }
  toggleCombobox(book: any) {
    this.selectedBook = book;
    this.options = this.selectedBook.children;
    this.comboboxExpanded = !this.comboboxExpanded;
  }
}
