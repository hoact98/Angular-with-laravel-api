import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: 'dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: 'admin/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Forms',
        url: 'base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: 'base/tables',
        icon: 'icon-puzzle'
      }
    ]
  },
 
  {
    name: 'Pages',
    url: 'admin/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: 'login',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '500',
        icon: 'icon-star'
      }
    ]
  },
  
  
];
