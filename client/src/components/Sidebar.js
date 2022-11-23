import React from "react";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      <div id="viewport">
        <div id="sidebar">
          <header>
            <Link to="#"> Share Bike</Link>
          </header>
          <ul class="nav">
            <li>
              <Link to="...">
                <i class="zmdi zmdi-view-dashboard"></i>New Item
              </Link>
            </li>
          </ul>
        </div>
        <div id="content">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <Link to="#">
                    <i class="zmdi zmdi-notifications text-danger"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
