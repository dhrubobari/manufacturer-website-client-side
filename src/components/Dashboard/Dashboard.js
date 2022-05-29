import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  
  return (
    <div>
      <h2 class="text-4xl text-yellow-500 font-bold uppercase mt-5">Dashboard</h2>
      <Outlet></Outlet>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-gray-200 text-base-content">
            <li>
              <Link to="/dashboard/orders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addreview">Add A Review</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/users">Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
