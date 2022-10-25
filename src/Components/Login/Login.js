import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
    const { googleLogIn, emailPasswordLogIn, githubLogIn } = useContext(AuthContext)
    const google = () => {
        googleLogIn();
    }
    const github = () => {
        githubLogIn();
    }
    const handleSubmitWithEmailPassword = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        emailPasswordLogIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    return (
        <form onSubmit={handleSubmitWithEmailPassword} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login Now !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <button onClick={google} className="btn btn-outline btn-primary"> <FaGoogle className='mr-3' /> Google LogIn</button>
                        <button onClick={github} className="btn btn-outline btn-primary"> <FaGithub className='mr-3' /> GitHub LogIn</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;