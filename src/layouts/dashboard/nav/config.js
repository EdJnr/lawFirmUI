// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'User Bookings',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Add Home Tag',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Add About Tag',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Add Service Tag',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Raison D\'etre Tag',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Add Booking Date',
    path: '/404',
    icon: icon('ic_cart'),
  },
];

export default navConfig;
