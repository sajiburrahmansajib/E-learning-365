import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Enroll = () => {
    const enroll = useLoaderData();
    const { picture, name } = enroll
    console.log(enroll)
    return (
        <div className='text-center'>
            <h1 className='text-3xl text-pink-700 mt-4'> <span className='text-success font-bold'>Congratulation</span> , You successfully Enroll the <span className='text-4xl text-green-700'>{name}</span> course.</h1>
            <div className='flex justify-center mt-10'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-2xl ">{name}</h2>
                        <p className='font-semibold text-yellow-400'>Always , Keep Learning</p>
                        <div className="card-actions justify-end">
                            <Link to='/courses'><button className="btn btn-primary">Enroll More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enroll;