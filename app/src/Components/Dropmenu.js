import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Login
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item ><Link to={'/login'} style={{ textDecoration: 'none' }}> User</Link></Dropdown.Item>
        <Dropdown.Item > <Link to={'/adminlog'} style={{ textDecoration: 'none' }}>Admin</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown >
  );
}

export default DropDown;