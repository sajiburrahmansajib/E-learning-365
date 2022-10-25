import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {
    const { createUser, userProfile } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const photo = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                userProfile(name, photo)
                console.log(user)
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    return (
        <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register hare !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="photoUrl" name='photoUrl' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <span>Already have an account ? <Link to='/login' className='underline text-info'>Login</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;