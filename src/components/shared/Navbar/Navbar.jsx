import { NavLink } from "react-router-dom";

const Navbar = () => {

    const style = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
      });
    return (
        <div>
            <h1>This is navbar</h1>
        
            <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/" style={style}>Home</NavLink>
        <NavLink to="/about" style={style}>About</NavLink>
    
   
      </nav>
        </div>
    );
};



export default Navbar;
