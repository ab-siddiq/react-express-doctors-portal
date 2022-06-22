import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* <!-- Page content here --> */}
    <p>Dashboard</p>
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Appointments</Link></li>
      <li><Link to='/dashboard/myReview'>My Review</Link></li>
      <li><Link to='/dashboard/myHistory'>My History</Link></li>
      <li><Link to='/dashboard/allUsers'>All users</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;