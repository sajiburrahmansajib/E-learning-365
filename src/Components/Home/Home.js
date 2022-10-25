import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://github.com/sajiburrahmansajib/img/blob/main/learning/bg.jpg?raw=true")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-red-400">Hello learner !!!</h1>
                        <p className="mb-5"> The aim of frameworks is to provide a common structure so that developers don’t have to redo it from scratch and can reuse the code provided. In this way, frameworks allow us to cut out much of the work and save a lot of time.Its the time to learn web framework </p>
                        <Link to='/courses'><button className="btn btn-active btn-accent text-white pl-12 pr-12">Our Courses</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;