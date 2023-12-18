import React from "react";
import "./Cycling.css";

const CyclingGradient = () => {
  return (
    <>
      <div class="container">
        <ul>
          <li>
            <a href="#">
              <span class="menu-item">
                <img
                  src="https://images.unsplash.com/photo-1701921335693-3c1cf9b6e541?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </span>{" "}
              <span class="menu-item-active">
                <img
                  src="https://plus.unsplash.com/premium_photo-1701094771979-e4042ee524d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class="menu-item">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1701921335693-3c1cf9b6e541?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </span>{" "}
              <span class="menu-item-active">
                {" "}
                <img
                  src="https://plus.unsplash.com/premium_photo-1701094771979-e4042ee524d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CyclingGradient;
