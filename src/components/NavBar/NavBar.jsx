import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ setUser }) {
  const {user} = userService.getUser();
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/tasks">{user && user.name}'s List</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      <hr />
    </nav>
  );
}