import { useSelector } from 'react-redux';

import UserMenu from '../../Components/UserMenu/UserMenu';

import authSelectors from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <header>{isLoggedIn && <UserMenu />}</header>;
}
