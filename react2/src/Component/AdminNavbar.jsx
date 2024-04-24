import '../Styles/AdminNavbar.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const AdminNavbar  = () => {
    return (  
            <div className="AdminNavbar">
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJpBAU3ikusFardpDW_tw9EO3B4AxwxIhvvQTo12l_Q&s" alt="" />
                </div>
                <div className="search">
                    <input placeholder='Search' type="text" />
                    <button><SearchSharpIcon id="searchicon"/></button>
                </div>
                <div className="setting">
                    
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      <SettingsOutlinedIcon/> Settings
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to="/adminhomepage/additem">Add Items</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/">LogOut</Link></Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
                </div>
            </div>
    );
}
 
export default AdminNavbar;