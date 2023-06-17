import { NavLink } from "react-router-dom";


export const Nav = () => {
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
    </div>
  );
};
