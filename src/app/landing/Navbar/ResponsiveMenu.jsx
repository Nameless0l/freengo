import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "./Navbar";
import { Offcanvas } from 'react-bootstrap';

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <Offcanvas show={showMenu} onHide={() => {}} placement="start" className="bg-white dark:bg-dark text-black dark:text-white">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Hello User</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="d-flex align-items-center mb-4">
          <FaUserCircle size={50} />
          <div className="ms-3">
            <h5>Hello User</h5>
            <p className="text-muted">Premium user</p>
          </div>
        </div>
        <nav>
          <ul className="list-unstyled">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id} className="mb-3">
                <a href={link} className="text-decoration-none text-dark dark:text-white">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Offcanvas.Body>
      <div className="text-center p-3">
        <p>
          Made with ❤ by <a href="https://dilshad-ahmed.github.io/" className="text-decoration-none">Dilshad</a>
        </p>
      </div>
    </Offcanvas>
  );
};

export default ResponsiveMenu;
