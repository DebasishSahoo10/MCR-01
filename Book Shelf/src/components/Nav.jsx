import { NavLink } from "react-router-dom";


export const Nav = () => {
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <NavLink to="/" className={({isActive}) => isActive ? "active" : "inactive"}>Home</NavLink>
      <NavLink to="/search" className={({isActive}) => isActive ? "active" : "inactive"}>Search</NavLink>
    </div>
  );
};
