import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'factor-ds';
  menu: any[];
  navigation: any = {
    previous: {},
    current: {},
    next: {}
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.menu = [
      {
        label: 'Inicio',
        url: '/',
        class: 'd-none'
      },
      {
        label: 'Acerca de',
        url: '/about'
      },
      {
        label: '¿Cómo contribuir?',
        url: '/contributing'
      },
      {
        label: 'Lineamientos',
        type: 'collapsible',
        children: [
          {
            label: 'Color',
            url: '/guidelines/color'
          },
          {
            label: 'Espaciado',
            url: '/guidelines/spacing'
          },
          {
            label: 'Tipografía',
            url: '/guidelines/typography'
          },
          {
            label: 'Feedback',
            url: '/guidelines/feedback'
          },
          {
            label: 'Paginación',
            url: '/guidelines/motion'
          },
          {
            label: 'Movimiento',
            url: '/guidelines/motion'
          },
          {
            label: 'Iconos',
            url: '/guidelines/icons'
          }
        ]
      },
      {
        label: 'Componentes',
        type: 'collapsible',
        children: [
          {
            label: 'Introducción',
            url: '/components/overview'
          },
          {
            label: 'Common',
            type: 'header'
          },
          {
            label: 'Icon',
            url: '/components/icon'
          },
          {
            label: 'Progress',
            url: '/components/progress'
          },
          {
            label: 'Message',
            url: '/components/message'
          },
          {
            label: 'Inputs',
            type: 'header'
          },
          {
            label: 'File picker',
            url: '/components/file-picker'
          },
          {
            label: 'Rating',
            url: '/components/rating'
          },
          {
            label: 'Navigation',
            type: 'header'
          },
          {
            label: 'Navbar',
            url: '/components/navbar'
          },
          {
            label: 'Toolbar',
            url: '/components/toolbar'
          },
          {
            label: 'Sidesheet',
            url: '/components/sidesheet'
          },
          {
            label: 'Searchbox',
            url: '/components/searchbox'
          },
          {
            label: 'Filters',
            url: '/components/filters'
          }
        ]
      },
      {
        label: 'Plantillas',
        type: 'collapsible',
        children: [
          {
            label: 'Overview',
            url: '/templates'
          },
          {
            label: 'Formulario básico',
            url: '/templates/basic-form'
          },
          {
            label: 'Autenticación',
            url: '/templates/login'
          },
          {
            label: 'Búsqueda',
            url: '/templates/search'
          },
          {
            label: 'Scroll infinito',
            url: '/templates/infinite-scroll'
          },
          {
            label: 'Tarea de flujo de trabajo',
            url: '/templates/workflow-task'
          }
        ]
      }
    ];
    this.router.events.subscribe((event: any) => {
      this.findNode(event.urlAfterRedirects, {children: this.menu});
    });
  }
  findNode(url: string, node: any, parentNode?: any) {
    node.children.forEach((childNode, index) => {
      if (childNode.url && childNode.url == url) {
        this.navigation.current = childNode;
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
          this.navigation.previous = previousNode;
          this.navigation.previous.bookName = parentNode ? parentNode.label : null;
        } else {
          this.navigation.previous = null;
        }

        let nextNode = node.children[index + 1];
        if (nextNode) {
          if (nextNode.children && nextNode.children.length > 0) {
            this.navigation.next = nextNode.children[0];
            this.navigation.next.bookName = nextNode.label;
          } else {
            if (nextNode.type && nextNode.type == 'header') {
              nextNode = node.children[index + 2];
            }
            this.navigation.next = nextNode;
            this.navigation.next.bookName = node.label;
          }
        } else if (parentNode && parentNode.children && parentNode.children.length > 0) {
          const index = parentNode.children.indexOf(node);
          let nextSibling = parentNode.children[index + 1];
          if (nextSibling.type && nextSibling.type == 'header') {
            nextSibling = parentNode.children[index + 2];
          }
          if (nextSibling && nextSibling.children && nextSibling.children.length > 0) {
            this.navigation.next = nextSibling.children[0];
            this.navigation.next.bookName = nextSibling.label;
          } else {
            this.navigation.next = nextSibling;
            this.navigation.next.bookName = parentNode.label;
          }
        } else {
          this.navigation.next = null;
        }
      } else if (childNode.children) {
        this.findNode(url, childNode, node);
      }
    });
  }
}
