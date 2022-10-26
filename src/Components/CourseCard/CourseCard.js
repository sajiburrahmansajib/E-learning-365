import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, picture } = course
    return (
        <div className="card w-96 bg-slate-500 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <Link to={id}><h2 className="card-title text-orange-400 underline underline-offset-8">{name}</h2></Link>

            </div>
        </div>
    );
};

export default CourseCard;