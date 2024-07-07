import { NavLink } from "react-router-dom";




const Nav = () => {

    const navs = <>
    
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/sale" >Fish Sale</NavLink></li>
        <li><NavLink to="/fish" >Fish</NavLink></li>
        <li><NavLink to="/dash" >Dashboard</NavLink></li>
    
    
    
    
    
    </>







    return (
        <div>

            <div className="  ml-5 mr-5">
              
            <div className="navbar bg-base-100   ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {navs}
      </ul>
    </div>

   
     <div className=" flex items-center gap-2">
     <img className=" h-[50px]" src="https://i.ibb.co/zXsMjYf/fish.png" alt="" />
     <a className=" text-2xl font-bold ">Apon<span className=" text-[#49c3f3]">Fish</span></a>

     </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
          {navs}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#49c3f3] text-white  ">Login</a>
  </div>
</div>






            </div>
            
        </div>
    );
};

export default Nav;