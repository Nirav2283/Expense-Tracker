import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Navbar({ setProgress }) {
  const location = useLocation();

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 480);
  }, [location.pathname, setProgress]);

  return (
    <>
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <img
                src="Grocery.PNG"
                style={{ width: '110px', marginRight: '15px', height: '70px' }}
                alt="Logo"
              />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/expenses">
                      My Expense
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/expenses/add">
                      Add Expense
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col m-3">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Navbar;
