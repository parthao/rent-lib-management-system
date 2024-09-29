import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/sidemenu.css";

export default function SideMenu() {
  const [isTransactionOpen, setIsTransactionOpen] = useState(false);

  const toggleTransactionMenu = () => {
    setIsTransactionOpen(!isTransactionOpen);
  };
  return (
    <div
      style={{ backgroundColor: "#062a5a", height: "100vh", position: "fixed" }}
    >
      <ul className="side-bar-menu-font">
        <li>MENU</li>
        <li>
          <Link className="linkto" to="/">
            <div className="side-bar-menu-item">
              &nbsp;&nbsp;<i className="bi bi-boxes side-bar-icon"></i>
              &nbsp;&nbsp;&nbsp;Dashboard
            </div>
          </Link>
        </li>
        <li>
          <Link className="linkto" to="User">
            <div className="side-bar-menu-item">
              &nbsp;&nbsp;<i className="bi bi-person side-bar-icon"></i>
              &nbsp;&nbsp;&nbsp;Users
            </div>
          </Link>
        </li>
        <li>
          <Link className="linkto" to="Property">
            <div className="side-bar-menu-item">
              &nbsp;&nbsp;<i className="bi bi-building side-bar-icon"></i>
              &nbsp;&nbsp;&nbsp;Property
            </div>
          </Link>
        </li>
        <li className={`acordian-menu ${isTransactionOpen ? "active" : ""}`}>
          <div className="side-bar-menu-item" onClick={toggleTransactionMenu}>
            &nbsp;&nbsp;<i className="bi bi-currency-rupee side-bar-icon"></i>
            &nbsp;&nbsp;&nbsp;Expenses
            <i
              className={`bi ${
                isTransactionOpen ? "bi-caret-up-fill" : "bi-caret-down-fill"
              }`}
            ></i>
          </div>
          <ul className="sub-menu">
            <li>
              <Link className="linkto" to="Bill">
                <div className="side-bar-menu-item">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="bi bi-arrow-right-circle side-bar-icon"></i>
                  &nbsp;&nbsp;&nbsp;Bill
                </div>
              </Link>
            </li>
            <li>
              <Link className="linkto" to="Transaction/External">
                <div className="side-bar-menu-item">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="bi bi-arrow-left-circle side-bar-icon"></i>
                  &nbsp;&nbsp;&nbsp;Other
                </div>
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div className="side-bar-menu-item">
            &nbsp;&nbsp;<i className="bi bi-file-diff-fill side-bar-icon"></i>
            &nbsp;&nbsp;&nbsp;Reports
          </div>
        </li>
        <li>
          <Link className="linkto" to="Application">
            <div className="side-bar-menu-item">
              &nbsp;&nbsp;<i className="bi bi-window side-bar-icon"></i>
              &nbsp;&nbsp;&nbsp;Application
            </div>
          </Link>
        </li>
        <li>
          <Link className="linkto" to="StudentReg">
            <div className="side-bar-menu-item">
              &nbsp;&nbsp;<i className="bi bi-arrow-repeat side-bar-icon"></i>
              &nbsp;&nbsp;&nbsp;Student Registration
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
