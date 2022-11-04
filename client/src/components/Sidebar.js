import React from "react";
import Item from "./Item";
function Sidebar() {
  return (
    <div>
      <div id="viewport">
        <div id="sidebar">
          <header>
            <a href="#"> Share Bike</a>
          </header>
          <ul class="nav">
            <li>
              <a href="...">
                <i class="zmdi zmdi-view-dashboard"></i>New Item
              </a>
            </li>
          </ul>
        </div>
        <div id="content">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <i class="zmdi zmdi-notifications text-danger"></i>
                  </a>
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
