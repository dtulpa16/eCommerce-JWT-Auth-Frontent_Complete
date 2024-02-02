import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/useAuth";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div onClick={() => navigate("/")} className="navbar-brand">
        eCommerce
      </div>
      {isAuthenticated && <div className="navbar-user">Welcome, {user.username}!</div>}
      <div className="navbar-links">
        <Link to="/shoppingcart" className="navbar-link">
          My Cart
        </Link>
        {/* If user is logged in, render Logout Button  */}
        {isAuthenticated ? (
          <div className="navbar-link" onClick={() => logout()}>Logout</div>
        ) : (
          <>
            <Link to="/login" className="navbar-link">
              Login
            </Link>
            <Link to="/register" className="navbar-link">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
