import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from './main_logo.png'
import { HiMenu, HiX } from "react-icons/hi";
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false)
    const handelLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logout');
            })
            .catch(error => {
                console.log(error)
            })
    }
    const activeStyle = {
        color: "red",
    };

    return (
        <div className="navbar bg-blue-800">
            <div className="flex-1 ">
                <NavLink to='/'> <img className='h-20' src={logo} alt="main logo" /></NavLink>

                <div className='navItem'>
                    <NavLink style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to='/' className="btn btn-ghost normal-case text-xl text-white ">Home</NavLink>

                    <NavLink style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to='/courses' className="btn btn-ghost normal-case text-xl  text-white">Courses</NavLink>


                    <NavLink style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to='/blogs' className="btn btn-ghost normal-case text-xl  text-white">Blog</NavLink>
                </div>

            </div>
            <div className="flex-none gap-2">
                {
                    user?.uid ?
                        <div className="form-control">
                            <span></span>
                        </div>
                        :
                        <div className=" navItem">
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/login' className="btn btn-ghost normal-case text-xl  text-white">Log In</NavLink>
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to='/register' className="btn btn-ghost normal-case text-xl  text-white">Sign Up</NavLink>
                        </div>

                }


                <div className="dropdown dropdown-end">

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-8 tooltip " data-tip={user?.displayName}>
                        <div className="w-15  rounded-full">
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
                        <li><div className="form-control">
                            <label className="label cursor-pointer ">
                                <span className="label-text mr-6">Dark Mode</span>
                                <input type="checkbox" className="toggle" unchecked />
                            </label>
                        </div></li>
                        {
                            user?.uid ?
                                <li><Link onClick={handelLogOut}>Log Out</Link></li>
                                :
                                <li><Link to='/login' >Log In</Link></li>
                        }
                    </ul>
                </div>
                <div className='md:hidden' >
                    {
                        open ?
                            <HiX onClick={() => setOpen(!open)} className='w-10 h-10 mr-6 text-red-600'></HiX>
                            :
                            <HiMenu onClick={() => setOpen(!open)} className='w-10 h-10 mr-6'></HiMenu>
                    }
                </div>

                <div className={`md: absolute duration-500 ease-in bg-emerald-600  ${open ? 'top-24' : 'top-[-320px]'}`}>
                    <NavLink style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to='/' className="btn btn-ghost normal-case  text-gray-900 font-bold text-3xl ">Home</NavLink>

                    <NavLink style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to='/courses' className="btn btn-ghost normal-case   text-gray-900 font-bold text-3xl">Courses</NavLink>


                    <NavLink style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to='/blogs' className="btn btn-ghost normal-case   text-gray-900 font-bold text-3xl">Blog</NavLink>
                    <NavLink style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } to='/register' className="btn btn-ghost normal-case   text-gray-900 font-bold text-3xl">Sign Up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;