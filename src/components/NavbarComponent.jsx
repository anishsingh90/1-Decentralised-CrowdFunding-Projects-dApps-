import { useNavigate, Link } from "react-router-dom";

export default function NavbarComponent(props) {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <nav className="leftNavbarContainer">
        <div className="navItem" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="navItem" onClick={() => navigate("discover")}>
          Discover
        </div>
        <div className="navItem" onClick={() => navigate("create_project")}>
        Create New Campaign
        </div>
      </nav>
      <div className="centerNavbarContainer">Decentra-X Fnd</div>
      <div className="rightNavbarContainer">
        <div className="navItem">
          <Link to="/profile" state={{ address: props.address }}>
            {props.address.slice(0,5) + "..." + props.address.slice(props.address.length - 4, props.address.length)}
          </Link>
        </div>
      </div>
    </div>
  );
}
