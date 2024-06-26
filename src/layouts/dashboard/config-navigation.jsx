// import {CleaningServicesIcon} from '@mui/icons-material/CleaningServices';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user management',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'services management',
    path: '/services',
    icon: icon('ic_user'),
  },
  {
    title: 'category management',
    path: '/category',
    icon: icon('ic_user'),
  },
  {
    title: 'product management',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog management',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
