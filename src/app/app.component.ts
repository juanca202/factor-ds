import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { SidenavComponent } from 'factor-navigation';

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
      url: '/design-system',
      children: [
        {
          label: 'About',
          url: '/design-system/about'
        },
        {
          label: 'Contributing',
          url: '/design-system/contributing'
        },
        {
          label: 'Guidelines',
          type: 'collapsible',
          children: [
            {
              label: 'Color',
              url: '/design-system/guidelines/color'
            },
            {
              label: 'Spacing',
              url: '/design-system/guidelines/spacing'
            },
            {
              label: 'Typography',
              url: '/design-system/guidelines/typography'
            },
            {
              label: 'Motion',
              url: '/design-system/guidelines/motion'
            },
            {
              label: 'Icons',
              url: '/design-system/guidelines/icons'
            }
          ]
        },
        {
          label: 'Components',
          type: 'collapsible',
          children: [
            {
              label: 'Overview',
              url: '/design-system/components'
            },
            {
              label: 'Common',
              type: 'header'
            },
            {
              label: 'Icon',
              url: '/design-system/components/icon'
            },
            {
              label: 'Image',
              url: '/design-system/components/image'
            },
            {
              label: 'Progress',
              url: '/design-system/components/progress'
            },
            {
              label: 'Message',
              url: '/design-system/components/message'
            },
            {
              label: 'Inputs',
              type: 'header'
            },
            {
              label: 'Text input',
              url: '/design-system/components/text-input'
            },
            {
              label: 'Text area',
              url: '/design-system/components/text-area'
            },
            {
              label: 'Select',
              url: '/design-system/components/select'
            },
            {
              label: 'File picker',
              url: '/design-system/components/file-picker'
            },
            {
              label: 'Rating',
              url: '/design-system/components/rating'
            },
            {
              label: 'List',
              url: '/design-system/components/list'
            },
            {
              label: 'Navigation',
              type: 'header'
            },
            {
              label: 'Sidenav',
              url: '/design-system/components/sidenav'
            },
            {
              label: 'Stepper',
              url: '/design-system/components/stepper'
            }
          ]
        },
        {
          label: 'Templates',
          type: 'collapsible',
          children: [
            {
              label: 'Overview',
              url: '/design-system/templates'
            },
            {
              label: 'Basic form',
              url: '/design-system/templates/basic-form'
            },
            {
              label: 'Login',
              url: '/design-system/templates/login'
            },
            {
              label: 'Search',
              url: '/design-system/templates/search'
            },
            {
              label: 'Workflow task',
              url: '/design-system/templates/workflow-task'
            },
            {
              label: 'Wizard',
              url: '/design-system/templates/wizard'
            }
          ]
        }
      ]
    },
    {
      label: 'Icons',
      url: '/icons/search'
    }
  ];
  options: any[];
  bookNavigation: any = {
    previous: {},
    current: {},
    next: {}
  };
  @ViewChild(SidenavComponent) sidenav: SidenavComponent;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.toggleCombobox(this.books[0]);
    this.router.events.subscribe((event: any) => {
      if (event.urlAfterRedirects) {
        if (event.urlAfterRedirects === '/design-system') {
          this.sidenav.hide();
        } else {
          this.sidenav.show();
        }
      }
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
          if (previousNode && previousNode.children && previousNode.children.length > 0) {
            previousNode = previousNode.children[previousNode.children.length - 1];
          }
        }
        if (previousNode) {
          this.bookNavigation.previous = previousNode;
          this.bookNavigation.previous.bookName = parentNode ? parentNode.label : null;
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
  }
}
