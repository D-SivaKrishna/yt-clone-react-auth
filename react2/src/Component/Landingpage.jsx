import { Link } from "react-router-dom";
import"../Styles/Landingpage.css";
const Landingpage = () => {
    return ( 
        <div className="landingpage">
           <Link to="/Adminlogin">
            <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png" alt="" />
            <h3>Admin</h3>
            </Link>
           <Link to="/userlogin">
            <img id="image"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfAxGV-fZxGL9elM_hQ2tp7skLeSwMyUiwo4lMm1zyA&s" alt="" />
           <h3> User</h3>
            </Link>

        </div>
        
     );
}
 
export default Landingpage;