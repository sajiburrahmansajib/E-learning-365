import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from './main_logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut();
    }
    let activeStyle = {
        color: "red",
    };
    return (
        <div className="navbar bg-blue-800">
            <div className="flex-1">
                <NavLink to='/'> <img className='h-20' src={logo} alt="main logo" /></NavLink>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to='/home' className="btn btn-ghost normal-case text-xl text-white ">Home</NavLink>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to='/courses' className="btn btn-ghost normal-case text-xl  text-white">Courses</NavLink>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to='/blogs' className="btn btn-ghost normal-case text-xl  text-white">Blog</NavLink>
            </div>
            <div className="flex-none gap-2">
                {
                    user?.uid ?
                        <div className="form-control">
                            <span></span>
                        </div>
                        :
                        <div className="">
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/login' className="btn btn-ghost normal-case text-xl  text-white">Log In</NavLink>
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/register' className="btn btn-ghost normal-case text-xl  text-white">Sign Up</NavLink>
                        </div>

                }


                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                        <div className="w-15 rounded-full">
                            {
                                user?.uid ?
                                    <img src={user.photoURL}></img>
                                    :
                                    <span className='text-4xl text-success'><FaUser /></span>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2  shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link >
                                {user?.displayName}
                            </Link>
                        </li>
                        <li><Link>Mode : Dark / Light</Link></li>
                        {
                            user?.uid ?
                                <li><Link onClick={handelLogOut}>Log Out</Link></li>
                                :
                                <li><Link to='/login' >Log In</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;