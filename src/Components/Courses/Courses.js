import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

import './Courses.css'

const Courses = () => {
    const data = useLoaderData();
    return (
        <div className='course-container'>
            {/* <h1>Total courses : {data.length}</h1> */}
            <div className='course-name'>
                <h1 className='text-center text-red-700 font-bold text-3xl mb-8'>We offer this courses...</h1>
                {
                    data.map(d => <Link to={d.id}>{d.name}</Link>)
                }
            </div>
            <div className='course-info'>
                {
                    data.map(d => <CourseCard key={d.id} course={d}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;