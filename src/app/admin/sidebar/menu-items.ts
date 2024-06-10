// menu-items.ts
export interface MenuItem {
  label: string;
  link: string;
  icon: string;
  roles?: string[];
  clickHandler?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    link: '/admin/dashboard',
    icon: 'bi bi-grid-1x2-fill',
    roles: ['Administrateur'],
  },
  {
    label: 'Manage Users',
    link: '/admin/manage-users',
    icon: 'bi bi-people-fill fs-3',
    roles: ['Administrateur'],
  },
  {
    label: 'Manage Formateurs',
    link: '/admin/add-formateur',
    icon: 'bi bi-person-circle fs-3',
    roles: ['Administrateur'],
  },
  {
    label: 'Programe',
    link: '/admin/programe',
    icon: 'bi bi-camera-video-fill fs-3',
    roles: ['Formateur'],
  },
  {
    label: 'Cours',
    link: '/admin/cours',
    icon: 'bi bi-mortarboard-fill fs-3',
    roles: ['Formateur'],
  },
  {
    label: 'Analystics',
    link: '',
    icon: 'bi bi-graph-up-arrow fs-3',
  },
  {
    label: 'Sales',
    link: '',
    icon: 'bi bi-cash-coin fs-3',
  },
  {
    label: 'Settings',
    link: '/admin/settings',
    icon: 'bi bi-gear-fill fs-3',
  },
  {
    label: 'Logout',
    link: '',
    icon: 'bi bi-box-arrow-right fs-3',
    clickHandler: 'logout',
  },
];
