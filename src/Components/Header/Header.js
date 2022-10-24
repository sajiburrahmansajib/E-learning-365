import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './main_logo.png'

const Header = () => {
    return (
        <div className="navbar bg-blue-800">
            <div className="flex-1">
                <Link to='/'> <img className='h-20' src={logo} alt="main logo" /></Link>
                <Link to='/home' className="btn btn-ghost normal-case text-xl text-white ">Home</Link>
                <Link to='/courses' className="btn btn-ghost normal-case text-xl  text-white">Courses</Link>
                <Link to='/blogs' className="btn btn-ghost normal-case text-xl  text-white">Blog</Link>
            </div>
            <div className="flex-none gap-2">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;