import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/admin',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Danh mục',
    url: 'admin/danh-muc',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Danh sách',
        url: 'danh-muc',
        icon: 'icon-puzzle'
      },
      {
        name: 'Thêm mới',
        url: 'danh-muc/them-moi',
        icon: 'icon-puzzle'
      }
    ]
  },
 
  {
    name: 'Quản lý sách',
    url: 'admin/sach',
    icon: 'fa fa-book',
    children: [
      {
        name: 'Danh sách',
        url: 'sach',
        icon: 'icon-star'
      },
      {
        name: 'Thêm mới',
        url: 'sach/them-moi',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Tác giả',
    url: 'admin/tac-gia',
    icon: 'fa fa-at',
    children: [
      {
        name: 'Danh sách',
        url: 'tac-gia',
        icon: 'icon-star'
      },
      {
        name: 'Thêm mới',
        url: 'tac-gia/them-moi',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Tài khoản',
    url: 'admin/tai-khoan',
    icon: 'fa fa-user',
    children: [
      {
        name: 'Danh sách',
        url: 'tai-khoan',
        icon: 'icon-star'
      },
      {
        name: 'Thêm mới',
        url: 'tai-khoan/them-moi',
        icon: 'icon-star'
      }
    ]
  },
  // {
  //   name: 'Hoá đơn',
  //   url: 'admin/hoa-don',
  //   icon: 'fa fa-first-order',
  //   children: [
  //     {
  //       name: 'Danh sách',
  //       url: 'hoa-don',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Thêm mới',
  //       url: 'hoa-don/them-moi',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  
  
];
